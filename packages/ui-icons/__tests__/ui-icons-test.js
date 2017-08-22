const {describe, it, run} = require('mocha')
const assert = require('assert')

const React = require('react')
const fs = require('fs')
const {iconName} = require('../utils')
const {promisify} = require('util')
const {render} = require('enzyme')
const {resolve} = require('path')

const readDir = promisify(fs.readdir)
const SOURCE_DIR = resolve(__dirname, '../icons')

readDir(SOURCE_DIR).then((files) => {
  files.forEach((path) => {
    const name = iconName(path)
    const module = require(resolve(SOURCE_DIR, path))

    describe(`Icon ${name}`, () => {
      it('renders successfully', () => {
        const subject = module[name]

        assert(render(React.createElement(subject)))
      })

      it('has a viewBox of 0 0 32 32', () => {
        const subject = module[name]
        const wrapper = render(React.createElement(subject))

        assert.equal(wrapper.find('svg').attr('viewbox'), '0 0 32 32')
      })

      it('has no fill values of #203a44, but rather currentColor', () => {
        const subject = module[name]
        const wrapper = render(React.createElement(subject))

        assert.equal(wrapper.find('[fill=#203a44]').length, 0)
        assert(wrapper.find('[fill=currentColor]').length > 0)
      })

      describe('inline variant', () => {
        it('has a width and height of 1em', () => {
          const subject = module[`Inline${name}`]
          const wrapper = render(React.createElement(subject))

          assert.equal(wrapper.find('svg').attr('height'), '1em')
          assert.equal(wrapper.find('svg').attr('width'), '1em')
        })

        it('has a style attribute with a vertical align of -0.18em', () => {
          const subject = module[`Inline${name}`]
          const wrapper = render(React.createElement(subject))

          assert.equal(wrapper.find('svg').attr('style'), 'vertical-align:-0.18em;')
        })
      })
    })
  })

  run()
})
