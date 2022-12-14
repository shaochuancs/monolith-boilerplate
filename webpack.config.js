const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const path = require('path');

const regExpExpressionDependency = /Critical dependency: the request of a dependency is an expression/;

module.exports = {
  entry: './src-backend/main.ts',
  ignoreWarnings: [{
    module: /log4js/,
    message: regExpExpressionDependency
  },{
    module: /express/,
    message: regExpExpressionDependency
  }],
  mode: process.env.NODE_ENV,
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({patterns: [{from: 'src-backend/views', to: 'views'}]}),
    new ESLintWebpackPlugin({extensions: ['ts', 'js']})
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
