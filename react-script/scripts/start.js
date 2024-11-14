const webpack = require('webpack');
const { merge } = require('webpack-merge');
const config = require('../config/base');
const express = require('express');
const app=express()
//使用webpack来处理js文件
const compiler = webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error(err);
    }
    console.log(stats.toString({
      chunks: false,
      colors: true,
    }));
  });
// 把项目根目录作为静态资源目录，用于服务 HTML 文件
app.use(express.static('./dist'));//指的是当前的cmd运行的位置process.cwd()
// 启动 HTTP 服务器，服务器监听在 process.env.PORT 端口
const server = app.listen("8081", () => {
    console.log(process.cwd());
    console.log('server is running');
  });