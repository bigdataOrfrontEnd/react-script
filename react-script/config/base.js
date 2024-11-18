const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    rules: [{
      loader: 'babel-loader',
      test: '/\.(js|jsx)$/',
      exclude: /node_modules/
    }]
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
