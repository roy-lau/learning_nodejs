var fs = require("fs");

console.log("准备打开文件……");
fs.stat("input.txt", function (err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log(stats);
  console.log("文件信息读取成功！");

  //检测文件类型
  console.log("是否为文件(isFile)?---" + stats.isFile());
  console.log("是否为目录(isDirectory)?---" + stats.isDirectory());
});

/*获取文件信息
语法

以下为通过异步模式获取文件信息的语法格式：

fs.stat(path, callback)

参数

参数使用说明如下：

    path - 文件路径。

    callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。

fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。例如判断是否为文件：

var fs = require('fs');

fs.stat('/Users/liuht/code/itbilu/demo/fs.js', function (err, stats) {
    console.log(stats.isFile()); 		//true
})

stats类中的方法有：
方法	描述
stats.isFile()	如果是文件返回 true，否则返回 false。
stats.isDirectory()	如果是目录返回 true，否则返回 false。
stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
stats.isSocket()	如果是 Socket 返回 true，否则返回 false。*/
