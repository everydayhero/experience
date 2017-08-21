const fs = require('fs')
const {camelCase, upperFirst, mapKeys} = require('lodash')
const {join, basename, extname, resolve} = require('path')
const {promisify, inspect} = require('util')
const {load} = require('cheerio')

const {assign} = Object
const readDir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

const SOURCE_DIR = resolve(process.cwd(), './svgs')
const OUTPUT_DIR = resolve(process.cwd(), './icons')

const sources = (inputDir) => (
  readDir(inputDir).then((files) => (
    Promise.all(
      files.map((path) => (
        readFile(resolve(SOURCE_DIR, path)).then((content) => ({
          path,
          content
        }))
      ))
    )
  ))
)

const attribMap = {
  'class': 'className',
  'xlink': 'xmlnsXlink'
}

const attribsToProps = (attribs) => (
  mapKeys(attribs, (v, k) => (
    attribMap[k] || k
  ))
)

const allowed = ({ name }) => (
  !!name && name !== 'defs'
)

const generateNode = ({
  name,
  attribs = {},
  children = []
}, index = 0) => (
  `React.createElement('${name}', transform('${name}', ${
    inspect(assign({ key: index }, attribsToProps(attribs)), { breakLength: Infinity })
  }), [${
    children.filter(allowed).map(generateNode).join(', ')
  }])`
)

const generate = ({
  name,
  content
}) => (`var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function ${name} (props) {
  var transform = props.transform || defaultTransform
  return ${generateNode(load(content.toString())('svg').get(0))}
}
`)

const filename = (path) => (
  basename(path, extname(path))
)

sources(SOURCE_DIR).then((svgs) => (
  Promise.all(
    svgs.map(({ content, path }) => {
      const name = upperFirst(camelCase(filename(path)))
      return writeFile(
        join(OUTPUT_DIR, `${name}.js`),
        generate({ name, content })
      )
    })
  )
)).catch((error) => {
  console.error(error)
  process.exit(1)
})
