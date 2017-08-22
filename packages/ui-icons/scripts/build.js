const fs = require('fs')
const {mapKeys} = require('lodash')
const {join, resolve} = require('path')
const {promisify, inspect} = require('util')
const {load} = require('cheerio')
const {iconName} = require('../utils')

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
}) => {
  const { attribs, children } = load(content.toString())('svg').get(0)

  return (`
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.Inline${name} = function Inline${name} (props) {
      var transform = props.transform || defaultTransform
      return ${generateNode({
        name: 'svg',
        children,
        attribs: assign(attribs, {
          width: '1em',
          height: '1em',
          style: { verticalAlign: '-0.18em' }
        })
      })}
    }

    exports.${name} = function ${name} (props) {
      var transform = props.transform || defaultTransform
      return ${generateNode({
        name: 'svg',
        children,
        attribs
      })}
    }
  `)
}

sources(SOURCE_DIR).then((svgs) => (
  Promise.all(
    svgs.map(({ content, path }) => {
      const name = iconName(path)
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
