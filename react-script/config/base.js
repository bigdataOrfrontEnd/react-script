const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 在此处指定 babel-loader 的路径
 const babelLoaderPath = require.resolve('babel-loader');

let config = {
  entry: [
    "react-script/node_modules/webpack-hot-middleware/client?reload=true",
    "./app/index.ts",
  ],
  // output: {
  //   filename: "bundle.js",
  //   path: path.resolve(process.cwd(), "dist"), // 使用 path.resolve 将相对路径转换为绝对路径
  //   publicPath: "/", //可以不配置
  // },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // 匹配 .ts 和 .tsx 文件
        exclude: /node_modules/,
        include: path.resolve(process.cwd(), 'app'),//限定这个loader处理哪个里面的代码
        use: {
          loader: babelLoaderPath,
          options: {
            presets: [
              require.resolve("@babel/preset-env"),//转换 ES6+ 语法
              require.resolve("@babel/preset-react"),// 转换 JSX 语法
            ],
          },
        },
      },
      {

      }

    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'app/index.html'),
    }),
  ],
};
module.exports = config;
