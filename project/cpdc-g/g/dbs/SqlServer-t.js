const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

const config = {
    'server': '192.168.1.253',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: 'sa@123'
        }
    },
    options: {
        database: 'RYCPDC_C20200310',
        encrypt: false
    }
};


class MsSql {
    constructor() {
        this.con = new Connection(config)
    }
    query (str) {
        const CON = this.con
        return new Promise((resolve, reject) => {
            CON.on('connect', function (err) {  // 连接数据库，执行匿名函数
                if (err) {
                    callback({ 'err': err['message'] + '请检查账号、密码是否正确,且数据库存在' });
                } else {
                    let request = new Request(str, function (err, rowCount) {
                        if (err) reject(err)
                        resolve(arr);
                        CON.close();
                    });

                    let arr = []
                    request.on('row', function (columns) {  // 查询成功数据返回
                        const rows = Object.create(null)
                        columns.forEach(function (column) {
                            rows[column.metadata.colName] = column.value;   // 获取数据		
                        });
                        arr.push(rows)
                    });

                    CON.execSql(request);   // 执行sql语句
                }
            });


        })
    }
}

module.exports = new MsSql()