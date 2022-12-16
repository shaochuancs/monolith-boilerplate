const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src-frontend/main.tsx',
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
    new ESLintWebpackPlugin({extensions: ['ts', 'js']})
  ],
  resolve: {
    extensions: ['.tsx', '.ts', 'jsx', 'js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/frontend')
  }
};
