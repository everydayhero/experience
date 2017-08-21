const fs = require('fs')
const {resolve} = require('path')
const {promisify} = require('util')
const React = require('react')
const assert = require('assert')
const {describe, it} = require('mocha')
const {render} = require('enzyme')

const readDir = promisify(fs.readdir)

const SOURCE_DIR = resolve(__dirname, '../icons')

describe('All UI Icons', () => {
  it('render successfully', () => (
    readDir(SOURCE_DIR).then((files) => (
      files.forEach((path) => {
        const subject = require(resolve(SOURCE_DIR, path))
        assert(render(React.createElement(subject)))
      })
    ))
  ))

  it('have the same and correct viewBox', () => (
    readDir(SOURCE_DIR).then((files) => (
      files.forEach((path) => {
        const subject = require(resolve(SOURCE_DIR, path))
        const wrapper = render(React.createElement(subject))
        assert.equal(wrapper.find('svg').attr('viewbox'), '0 0 32 32')
      })
    ))
  ))
})
