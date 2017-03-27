const path = require('path')

const config = {
  entry: {
    'index': './index.js'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['latest', 'stage-0']
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map'
}

module.exports = config
