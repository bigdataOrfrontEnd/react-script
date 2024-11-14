const webpack = require("webpack");
const { merge } = require("webpack-merge");
const config = require("../config/base");
const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");
const app = express();
//使用webpack来处理js文件
const compiler = webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err);
  }
  console.log(
    stats.toString({
      chunks: false,
      colors: true,
    })
  );
});
// 给 app 注册 webpackMiddleware 中间件
app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      // 使用webpack nodejs api, log 控制需要在这里重新配置
      stats: {
        colors: true,
        chunkModules: true,
        chunks: true,
        timings: true,
        version: false,
        hash: false,
        children: false,
        assets: false,
      },
    })
  );
  
// 使用 webpack-dev-middleware，将文件存储在内存中而不是输出到磁盘
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath, // 从配置中读取 publicPath
    stats: { colors: true }, // 控制台输出带颜色的编译信息
  })
);

// 为了支持模块热替换，响应用于替换老模块的资源
app.use(
  require("webpack-hot-middleware")(compiler, {
    log: console.log,
  })
);
// 把项目根目录作为静态资源目录，用于服务 HTML 文件
// app.use(express.static('./dist'));//指的是当前的cmd运行的位置process.cwd()
// 启动 HTTP 服务器，服务器监听在 process.env.PORT 端口
const server = app.listen("8081", () => {
  console.log(process.cwd());
  console.log("server is running");
});
