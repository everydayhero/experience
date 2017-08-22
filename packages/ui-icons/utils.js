const {basename, extname} = require('path')
const {camelCase, upperFirst} = require('lodash')

const filename = (path) => (
  basename(path, extname(path))
)

const iconName = (path) => (
  upperFirst(camelCase(filename(path)))
)

exports.iconName = iconName
