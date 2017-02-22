const path = require('path')

const CDN_ROOT = 'https://raw.githubusercontent.com/everydayhero/experience/master/packages/brand-assets/source/images/'

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
              presets: ['latest', 'stage-0']
            }
          }
        ]
      },
      {
        test: /\.(png|svg|eps)$/,
        loader: 'file-loader'
      }
    ]
  },
  devtool: 'source-map'
}

if (process.env.NODE_ENV === 'production') {
  config.output.publicPath = CDN_ROOT
}

module.exports = config
