import reduce from 'lodash/reduce'
import each from 'lodash/each'
import find from 'lodash/find'
import startsWith from 'lodash/startsWith'
import { isBrowser, isStyleProp, isObj } from './utils'
import {
  PREFIXABLE_PROPS,
  ALTERNATE_PROPS,
  PREFIXABLE_VALUES,
  ALTERNATE_VALUES
} from './prefixes'

const cache = {}
const supportedProperties = (() => isBrowser ? document.createElement('p').style : {})()

const VENDORS = {
  opera: 'O',
  chrome: 'webkit',
  safari: 'Webkit',
  firefox: 'Moz',
  msie: 'ms',
  node: ''
}

const jsPrefix = (() => {
  if (typeof navigator === 'undefined') return ''
  const ua = navigator.userAgent.toLowerCase()
  const match = /(opera|msie|firefox|chrome|safari|node)/.exec(ua)
  if (!match) console.warn('CXSync: No vendor match found: This browser is not officially supported and vendor prefixes will be absent.')
  return match ? VENDORS[match[0]] : ''
})()

const cssPrefix = `-${jsPrefix.toLowerCase()}-`

export const prefixProperty = (property, prefix = jsPrefix) => {
  const cacheKey = property + prefix
  if (cacheKey in cache) return cache[cacheKey]
  const prefixed = prefix + property.slice(0, 1).toUpperCase() + property.slice(1)

  if (!prefix || property in supportedProperties) {
    cache[cacheKey] = property
  } else if (ALTERNATE_PROPS[property] in supportedProperties) {
    cache[cacheKey] = ALTERNATE_PROPS[property]
  } else if (find(PREFIXABLE_PROPS, (p) => startsWith(property, p)) && prefixed in supportedProperties) {
    cache[cacheKey] = prefixed
  } else {
    cache[cacheKey] = property
  }

  return cache[cacheKey]
}

export const prefixValue = (property, value) => {
  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value
  if (property === 'content' && value === '') value = '""'
  const cacheKey = property + value
  if (cacheKey in cache) return cache[cacheKey]

  const tryValue = (value) => {
    supportedProperties[property] = ''
    supportedProperties[property] = value
    return !!supportedProperties[property].length
  }

  try {
    tryValue(value)
  } catch (err) { // IE is shit
    return value
  }

  const prefixed = cssPrefix + value
  const alternate = find(ALTERNATE_VALUES[value], tryValue)

  if (tryValue(value)) {
    cache[cacheKey] = value
  } else if (find(PREFIXABLE_VALUES, (v) => startsWith(value, v)) && tryValue(prefixed)) {
    cache[cacheKey] = prefixed
  } else if (alternate) {
    cache[cacheKey] = alternate
  } else {
    cache[cacheKey] = value
  }

  return cache[cacheKey]
}

const prefixAllFlatReducer = (res, val, prop) => {
  if (isStyleProp(prop) && !isObj(val)) {
    each(VENDORS, (prefix) => {
      const prefixed = prefixProperty(prop, prefix)
      res[prefixed] = prefixValue(prefixed, val)
    })
  } else {
    res[prop] = val
  }
  return res
}

export const prefixAllFlat = (style) => reduce(style, prefixAllFlatReducer, {})
