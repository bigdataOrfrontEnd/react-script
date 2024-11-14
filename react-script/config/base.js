const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
let config = {
  entry: [
    "./react-script/node_modules/webpack-hot-middleware/client?reload=true",
    "./app/index.ts",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist"), // 使用 path.resolve 将相对路径转换为绝对路径
    publicPath: "/", //可以不配置
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts"],
  },
  module: {},
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 启用 HMR 插件
    new HtmlWebpackPlugin({
        template: path.resolve(process.cwd(),'app/index.html'),
       
      }),
  ],
};
module.exports = config;
