import merge from 'lodash/merge'
import uniq from 'lodash/uniq'
import sortBy from 'lodash/sortBy'
import filter from 'lodash/filter'
import createRules from './create-rules'
import {
  hasDocument,
  randomHex,
  hashed,
  propertyFilter
} from './utils'

export let options = {
  autoAttach: true
}
export let styleTag = null
export let cache = {}

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
  const rules = createRules(hashname, style)

  rules.forEach(r => { cache[r.id] = r })

  rules.filter(propertyFilter)
    .forEach(r => classNames.push(r.selector.replace(/^\./, '')))

  if (options.autoAttach) cxsync.attach()

  return uniq(classNames).join(' ')
}

cxsync.attach = () => {
  if (!hasDocument()) return

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
    return sortBy(filter(cache, (v) => !!v && v.css.length), ['order'])
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
