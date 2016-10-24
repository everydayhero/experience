import hash from 'murmurhash-js/murmurhash3_gc'
import prefix from 'inline-style-prefixer/static'
import merge from 'lodash/merge'
import createRules from './create-rules'

export let options = {
  autoAttach: true
}

export let styleTag = null
export let cache = {}

const { floor, random } = Math
const randomHex = () => floor(random() * 16777215).toString(16)
const hashed = (str) => 'cxsync-' + hash(str, 128)
const styleReducer = (a, b) => (a.indexOf(b) > -1) ? a : [ ...a, b ]
const propertyFilter = ({ selector }) => !(/:/.test(selector)) && !(/\s/.test(selector))

export const styleId = hashed(randomHex())

const createStyleTag = () => {
  styleTag = styleTag || document.getElementById(styleId)
  if (!styleTag) {
    styleTag = document.createElement('style')
    styleTag.id = styleId
    document.head.appendChild(styleTag)
  }
  return styleTag.sheet
}

const cxsync = (...rest) => {
  const style = merge({}, ...rest)
  const hashname = hashed(JSON.stringify(style))
  if (cache[hashname]) return hashname

  const classNames = []
  const rules = createRules(hashname, prefix(style))

  rules.forEach(r => { cache[r.id] = r })

  rules.filter(propertyFilter)
    .forEach(r => classNames.push(r.selector.replace(/^\./, '')))

  if (options.autoAttach) cxsync.attach()

  return classNames.reduce(styleReducer, []).join(' ')
}

cxsync.attach = () => {
  if (typeof document === 'undefined') return

  const sheet = createStyleTag()
  const selectors = [].slice.call(sheet.cssRules).map(r => r.selectorText)

  cxsync.rules
    .filter(({ selector }) => selectors.indexOf(selector) === -1)
    .forEach(({ css }) => {
      try {
        sheet.insertRule(css, sheet.cssRules.length)
      } catch (e) {}
    })
}

cxsync.clearCache = () => { cache = {} }

Object.defineProperty(cxsync, 'rules', {
  get () {
    return Object.keys(cache || {})
      .map(k => cache[k] || false)
      .filter(r => r.css.length)
      .sort((a, b) => a.order - b.order)
  }
})

Object.defineProperty(cxsync, 'css', {
  get () {
    return cxsync.rules
      .map(r => r.css)
      .join('')
  }
})

export default cxsync
