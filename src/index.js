import hash from 'murmurhash-js/murmurhash3_gc'
import prefix from 'inline-style-prefixer/static'
import merge from 'lodash/merge'
import createRules from './create-rules'

export let styleTag = null
export let cache = {}

export let options = {
  autoAttach: true
}

const randomHex = () => Math.floor(Math.random() * 16777215).toString(16)
const hashed = (str) => 'cxsync-' + hash(str, 128)
const styleReducer = (a, b) => (a.indexOf(b) > -1) ? a : [ ...a, b ]

export const styleId = hashed(randomHex())

const cxsync = (...rest) => {
  const style = prefix(merge({}, ...rest))
  const classNames = []
  const hashname = hashed(JSON.stringify(style))
  if (cache[hashname]) return hashname
  const rules = createRules(hashname, style)

  rules.forEach(r => { cache[r.id] = r })

  rules.filter(r => !(/:/.test(r.selector)))
    .filter(r => !(/\s/.test(r.selector)))
    .forEach(r => classNames.push(r.selector.replace(/^\./, '')))

  if (options.autoAttach) cxsync.attach()

  return classNames.reduce(styleReducer, []).join(' ')
}

cxsync.attach = () => {
  if (typeof document === 'undefined') {
    return
  }

  const rules = cxsync.rules
  styleTag = styleTag || document.getElementById(styleId)

  if (styleTag === null) {
    styleTag = document.createElement('style')
    styleTag.id = styleId
    document.head.appendChild(styleTag)
    cxsync.sheet = styleTag.sheet
  }

  rules
    .forEach(rule => {
      try {
        cxsync.sheet.insertRule(rule.css, cxsync.sheet.cssRules.length)
      } catch (e) {}
    })
}

cxsync.options = options
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
