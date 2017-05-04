const path = require('path')

const config = {
  entry: {
    'index': './source/index.js'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs-module',
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
              presets: [
                ['latest', {
                  'es2015': {
                    'modules': false
                  }
                }],
                'stage-0',
                'react'
              ]
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map'
}

module.exports = config
