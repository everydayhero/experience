import { prefixProperty, prefixValue, prefixAllFlat } from './prefixer'
import {
  isBrowser,
  isAnimation,
  isPseudoSelector,
  isMediaQuery,
  isNotSelector,
  isArr,
  parseValue,
  kebab,
  isArrayOrNotObject,
  isObjectAndNotArray
} from './utils'

const createRules = (name, style, parent) => {
  // Extract nested rules
  const rules = createNestedRules(name, style, parent)

  if (!name) return rules

  if (!isBrowser) style = prefixAllFlat(style)

  const styles = Object.keys(style)
    .filter((key) => isArrayOrNotObject(style[key]))
    .map((key) => ({
      key,
      prop: kebab(prefixProperty(key)),
      value: prefixValue(key, parseValue(key, style[key]))
    }))
    .reduce((a, b) => isArr(b.value)
      ? [...a, ...b.value.map((v) => ({ ...b, value: prefixValue(b.prop, v) }))]
      : [...a, b]
    , [])

  // Add base rule
  const selector = isNotSelector(name) ? name : '.' + name

  if (isAnimation(parent)) {
    return [{
      id: name + parent,
      order: 3,
      selector,
      css: createRuleset(selector, styles)
    }]
  }

  rules.unshift({
    id: name + (parent || ''),
    order: parent ? 2 : 1,
    selector,
    css: createRuleset(selector, styles, parent)
  })

  return rules
}

const createNestedRules = (name, style, parent) => {
  return Object.keys(style)
    .filter((key) => isObjectAndNotArray(style[key]))
    .map((key) => {
      if (isPseudoSelector(key)) {
        return createRules(name + key, style[key], parent)
      } else if (isAnimation(key)) {
        const subrules = createRules(null, style[key], key)
        return [{
          id: key,
          order: 3,
          selector: key,
          css: `${key} { ${subrules.map(r => r.css).join('')} }`
        }]
      } else if (isMediaQuery(key)) {
        return createRules(name, style[key], key)
      } else {
        const selector = name ? `${name} ${key}` : key
        return createRules(selector, style[key], parent)
      }
    })
    .reduce((a, b) => a.concat(b), [])
}

const createRuleset = (selector, styles, parent) => {
  const declarations = styles.map(s => s.prop + ':' + s.value)
  const ruleset = `${selector}{${declarations.join(';')}}`
  return parent ? `${parent} { ${ruleset} }` : ruleset
}

export default createRules
