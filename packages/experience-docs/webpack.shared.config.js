const { DefinePlugin } = require('webpack')
const DotenvPlugin = require('dotenv-webpack')

module.exports = {
  plugins: [
    new DefinePlugin({
      'process.env.BASE_PATH': `'${process.env.BASE_PATH || ''}'`
    }),
    new DotenvPlugin({
      path: `./${process.env.ENV_FILE || '.env.default'}`
    })
  ],
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['latest', 'stage-0', 'react']
            }
          },
          'react-markdown-loader'
        ]
      }
    ]
  }
}
