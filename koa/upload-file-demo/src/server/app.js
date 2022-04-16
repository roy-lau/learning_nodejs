/**
 * 服务入口
 */
const Koa = require("koa2"),
  Router = require("koa2-router"),
  App = new Koa(),
  route = new Router(),
  Routes = require("./routes"),
  // 中间件
  bodyparser = require("koa-bodyparser"),
  koaStatic = require("koa-static"),
  koaBody = require("koa-body"),
  dayjs = require("dayjs"),
  setHeaders = require("./middlewares/setHeaders"),
  config = require("./config.js"),
  path = require("path");

// 将路由传递下去
Routes(route);

App
  // logger
  .use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start,
      curDate = dayjs().format("YYYY-MM-DD HH:mm:ss");

    console.log(
      `[${curDate}] ${ctx.method} ${ctx.status} ${ctx.url} - ${ms}ms\n`
    );
  })
  /**
   * middlewares
   */
  .use(
    bodyparser({
      enableTypes: ["json", "form", "text"],
      onerror: (err, ctx) => {
        ctx.throw("数据解析出错： " + err, 422);
      },
    })
  )
  // 使用 ctx.request.files 获取文件信息
  .use(
    koaBody({
      multipart: true, // 支持文件上传
      formidable: {
        keepExtensions: true, // 保留后缀
        //设置文件的默认保存目录，不设置则保存在系统临时目录下  os.tmpdir()
        uploadDir: path.resolve(__dirname, "../static/uploads"),
        // maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
        // onFileBegin: (name, file) => {
        //     console.log(name, file)
        // },
        onError: (err, ctx) => {
          ctx.throw("文件上传出错：" + err, 423);
        },
      },
    })
  )
  // 静态文件夹
  .use(koaStatic(path.resolve(__dirname, "../static")))

  .use(setHeaders) // 设置响应头

  .use(route) // koa 使用 koa2-router

  // koa response test ……
  // .use( ctx => {
  //     ctx.body = { info: "is json data ?" };
  // });

  // 错误处理
  .on("error", (err, ctx) => {
    console.error("【server error: 】", err, ctx);
  })

  /**
   * koa http server
   */
  .listen(config.port, () => {
    console.log("file update server start...... ", config.port);
  });
