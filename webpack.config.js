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
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
