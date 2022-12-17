const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    new ESLintWebpackPlugin({extensions: ['ts', 'js']}),
    new HtmlWebpackPlugin({
      filename: 'index.handlebars',
      template: 'src-backend/view/index.handlebars'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', 'jsx', 'js']
  },
  output: {
    filename: '[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist/view')
  }
};
