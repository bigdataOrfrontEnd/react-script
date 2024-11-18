const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 在此处指定 babel-loader 的路径
const babelLoaderPath = path.resolve(__dirname, 'node_modules', 'babel-loader');
let config = {
  entry: [
    "react-script/node_modules/webpack-hot-middleware/client?reload=true",
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

  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // 匹配 .ts 和 .tsx 文件
        // exclude: /node_modules/,
        use: {
          loader: babelLoaderPath,  // 使用脚手架中的 babel-loader
          options: {
            presets: [
              "@babel/preset-env",  // 支持最新的 JavaScript 特性
              "@babel/preset-react", // 支持 JSX 语法
              "@babel/preset-typescript", // 支持 TypeScript
            ],
          },
        },
      },
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: babelLoaderPath,  // 使用脚手架中的 babel-loader
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
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
