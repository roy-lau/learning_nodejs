'use strict';
const sql = require('mssql')
const XLSX = require('xlsx')
const fs = require('fs')
const CONNECT_SQL = 'mssql://sa:sa@123@192.168.1.253/RYCPDC_C20190902'

// let patint_id = ['z583167', 'z571582', 'z553518', 'z574941', 'z574744', 'z574550', 'z574408', 'z573663', 'z575841', 'z575737', 'z575577', 'z576236', 'z576041', 'z577060', 'z576580', 'z576757', 'z577132', 'z576365', 'z576411', 'z577361', 'z577673', 'z577095', 'z577522', 'z576235', 'z577768', 'z577757', 'z577229', 'z577427', 'z578062', 'z578102', 'z304687', 'z579041', 'z576766', 'z579430', 'z579509', 'z579782', 'z579657', 'z579614', 'z580292', 'z580439', 'z528634', 'z580807', 'z580125', 'z581954', 'z569296', 'z581743', 'z582504', 'z582364', 'z582371', 'z582632', 'z581854', 'z582587', 'z583625', 'z582964', 'z583988', 'z583816', 'z583886', 'z583166', 'z583651', 'z583393', 'z584556', 'z576043', 'z571438', 'z573822', 'z574797', 'z576877', 'z585480', 'z585371', 'z586374', 'z586110', 'z585786', 'z587672', 'z587982', 'z586859', 'z587713', 'z587952', 'z585351', 'z587866', 'z587721', 'z588397', 'z589122', 'z588864', 'z405627', 'z589136', 'z589123', 'z590491', 'z591210', 'z591192', 'z591287', 'z591822', 'z591940', 'z592237', 'z592756', 'z592782', 'z592543', 'z593828', 'z594058', 'z593410', 'z195196', 'z595204', 'z595593', 'z595084', 'z595077', 'z595503', 'z595671', 'z595987', 'z595096', 'z596605', 'z596398', 'z597415', 'z596356', 'z596881', 'z597502', 'z597699', 'z595821', 'z597913', 'z598358', 'z598139', 'z598719', 'z599300', 'z597428', 'z597919', 'z599777', 'z599783', 'z595818', 'z599728', 'z599865', 'z600413', 'z600932', 'z601231', 'z600794', 'z600891', 'z601130', 'z596879', 'z601939', 'z600142', 'z602471', 'z601961', 'z601725', 'z602865', 'z601442', 'z602884', 'z604379', 'z603332', 'z603330', 'z604196', 'z604162', 'z617071', 'z603939', 'z602009', 'z616399', 'z616360', 'z618902', 'z616088', 'z604910', 'z605083', 'z606499', 'z607408', 'z608280', 'z609289', 'z609170', 'z609342', 'z610515', 'z610581', 'z608815', 'z610626', 'z611398', 'z611076', 'z612804', 'z595527', 'z611066', 'z613911', 'z614940', 'z480386', 'z615775', 'z616260', 'z617493', 'z235849', 'z618537', 'z620242', 'z619056', 'z492440', 'z616062', 'z617544', 'z621052', 'z622520', 'z622984', 'z624157', 'z404094', 'z624503', 'z625544', 'z626560', 'z598368', 'z604144', 'z605283', 'z605169', 'z329122', 'z605793', 'z605297', 'z605503', 'z605287', 'z605961', 'z606694', 'z607554', 'z607355', 'z609400', 'z609518', 'z608757', 'z609583', 'z609933', 'z610297', 'z609426', 'z610852', 'z611161', 'z611898', 'z612359', 'z611945', 'z612488', 'z613057', 'z610984', 'z614704', 'z614025', 'z615705', 'z615394', 'z616400', 'z615074', 'z617249', 'z615992', 'z618590', 'z612518', 'z616386', 'z620160', 'z620964', 'z620790', 'z619658', 'z620787', 'z624054', 'z624667', 'z622703', 'z624560', 'z625460', 'z625301', 'z626123', 'z084780', 'z626501', 'z613071', 'z573927', 'z573884', 'z475383', 'z576677', 'z577930', 'z577787', 'z578858', 'z579423', 'z583914', 'z584280', 'z584840', 'z585734', 'z586107', 'z586430', 'z586866', 'z566252', 'z588870', 'z590132', 'z590747', 'z590466', 'z180284', 'z594980', 'z597026', 'z597744', 'z598440', 'z600414', 'z600510', 'z602236', 'z602201', 'z603029', 'z604074', 'z216535', 'z603144', 'z604935', 'z605296', 'z605154', 'z605116', 'z605436', 'z606516', 'z606146', 'z606373', 'z603954', 'z607989', 'z608173', 'z607964', 'z609893', 'z383990', 'z607414', 'z611651', 'z611351', 'z612753', 'z612587', 'z613204', 'z615959', 'z616380', 'z616193', 'z617177', 'z617580', 'z619119', 'z620157', 'z619065', 'z620442', 'z620863', 'z618151', 'z622176', 'z621026', 'z621723', 'z622218', 'z621851', 'z623493', 'z624167', 'z622984', 'z624836', 'z624432', 'z624460']

const dowPATIENT_NO = async () => {
    try {

        // const PAT_VISIT = require("./2.xlsx-source.json")
         const workbook = XLSX.readFile("./input/胰腺癌单病种数据元2018.1-2019.4——整理.xlsx", { cellDates: true, cellStyles: true }), // 获取表格数据
                sheetNames = workbook.SheetNames, // 获取表格里的每个 sheet
                worksheet = workbook.Sheets[sheetNames[0]]; // 获取第一个 sheet

            let PAT_VISIT = XLSX.utils.sheet_to_json(worksheet) // 处理为 json 格式

        const poll = await new sql.ConnectionPool(CONNECT_SQL).connect()

        let patientMaps = []
        for (let i = 0; i < PAT_VISIT.length; i++) {
            console.log(i,PAT_VISIT.length)
            const list = await poll.query `SELECT * FROM [dbo].[PAT_VISIT] WHERE PATIENT_ID=${PAT_VISIT[i]['病案号']} AND SD_CODE='YXA_O'`

            // patientMaps.push({
            //     PATIENT_NO: list.recordset[0].PATIENT_NO,
            //     '病案号': PAT_VISIT[i]['病案号']
            // })
            patientMaps.push(list.recordset[0].PATIENT_NO)
            // console.log(list.recordset[0].PATIENT_NO, list.recordset[0].PATIENT_ID, patint_id[id])
        }

        await saveFile('pat_visit.json', JSON.stringify(patientMaps, null, 2))
    } catch (err) {
        console.error(err)
    }
}
// dowPATIENT_NO()

async function saveFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(fileName, "数据写入失败！");
            return console.error(err);
        }
        console.log(fileName, "数据写入成功！");
    });
}

const dowSql = async () => {
    try {
        const poll = await new sql.ConnectionPool(CONNECT_SQL).connect()
        const data = await poll.query `SELECT ITEM_CODE,ITEM_NAME,ITEM_CV_CODE,ITEM_UNIT FROM [dbo].[SD_ITEM_DICT] WHERE SD_CODE!='YXA'`
        const list = await poll.query `SELECT * FROM [dbo].[SD_ITEM_CV_DICT] WHERE SD_CODE!='YXA'`

        await saveFile('./data/sd_item_dict.json', JSON.stringify(data.recordsets[0], null, 2))
        await saveFile('./data/sd_item_cv_dict.json', JSON.stringify(list.recordsets[0], null, 2))

    } catch (err) {
        console.error(err)
    }
}

dowSql()