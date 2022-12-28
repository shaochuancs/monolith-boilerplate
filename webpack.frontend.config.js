const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const plugins = [
  new CleanWebpackPlugin(),
  new ESLintWebpackPlugin({extensions: ['ts', 'js']}),
  new HtmlWebpackPlugin({
    filename: 'index.handlebars',
    template: 'src-backend/view/index.handlebars'
  }),
  new CopyPlugin({
    patterns: [{
      from: 'src-frontend/public', to: 'public'
    }]
  }),
];
const entry = {
  main: ['./src-frontend/main.tsx']
};
if (process.env.NODE_ENV === 'development') {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  entry.main.push('webpack-hot-middleware/client')
}

module.exports = {
  entry: entry,
  mode: process.env.NODE_ENV,
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }, {
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: plugins,
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  output: {
    filename: 'static/[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist/view'),
    publicPath: '/'
  }
};
