import reduce from 'lodash/reduce'
import each from 'lodash/each'
import find from 'lodash/find'
import memoize from 'lodash/memoize'
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
  fban: 'Webkit',
  fbav: 'Webkit',
  msie: 'ms',
  node: ''
}

const jsPrefix = (() => {
  if (typeof navigator === 'undefined') return ''
  const ua = navigator.userAgent || navigator.vendor || (isBrowser && window.opera)
  const match = /(opera|msie|firefox|chrome|safari|fban|fbav|node)/.exec(ua.toLowerCase())
  if (!match) console.warn('CXSync: No vendor match found: This browser is not officially supported and vendor prefixes will be absent.')
  return match ? VENDORS[match[0]] : ''
})()

export const cssPrefix = `-${jsPrefix.toLowerCase()}-`

export const prefixProperty = memoize((property, prefix = jsPrefix) => {
  const prefixed = prefix + property.slice(0, 1).toUpperCase() + property.slice(1)

  if (property === 'justifyContent' && prefix === 'ms') {
    property = 'msFlexPack'
  }
  if (!prefix || property in supportedProperties) {
    return property
  } else if (ALTERNATE_PROPS[property] in supportedProperties) {
    return ALTERNATE_PROPS[property]
  } else if (find(PREFIXABLE_PROPS, (p) => startsWith(property, p)) && prefixed in supportedProperties) {
    return prefixed
  } else {
    return property
  }
})

const valueCacheKey = (...args) => (JSON.stringify(args))
export const prefixValue = memoize((property, value) => {
  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value
  if (property === 'content' && !value.length) value = '""'

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
    return value
  } else if (find(PREFIXABLE_VALUES, (v) => startsWith(value, v)) && tryValue(prefixed)) {
    return prefixed
  } else if (alternate) {
    return alternate
  } else {
    return value
  }
}, valueCacheKey)

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
