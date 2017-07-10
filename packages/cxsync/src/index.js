import reduce from 'lodash/reduce'
import isFunction from 'lodash/isFunction'
import memoize from 'lodash/memoize'
import merge from 'lodash/merge'

import {StyleSheet} from './sheet'
import {unitlessProps, shorthands} from './props'
import {kebab, isValue, isMediaQuery, isKeyframe, isPseudoSelector, isArr} from './utils'
import {prefixProperty, prefixValue, cssPrefix} from './prefixer'

const {keys} = Object

const hash = (str, prefix = '_') => {
  let val = 5381
  let i = str.length

  while (i) {
    val = (val * 33) ^ str.charCodeAt(--i)
  }

  return prefix + (val >>> 0).toString(36)
}

export const keyframeSheet = new StyleSheet()
export const sheet = new StyleSheet()
export const mediaSheet = new StyleSheet()

keyframeSheet.inject()
sheet.inject()
mediaSheet.inject()

export const getCss = () => {
  let css = ''
  const rules = [...keyframeSheet.rules(), ...sheet.rules(), ...mediaSheet.rules()]
  for (let i = 0; i < rules.length; i++) {
    css += rules[i].cssText
  }
  return css
}

const options = {
  prefix: ''
}

export const setOptions = (opts) => {
  for (let key in opts) {
    options[key] = opts[key]
  }
}

export const reset = () => {
  cxsync.cache = {}
  keyframeSheet.flush()
  sheet.flush()
  mediaSheet.flush()
}

const cxsync = (...styles) => parse(merge({}, ...styles)).join(' ')

const parse = memoize((obj, media, children = '') => {
  const classNames = []
  const appendStyle = (key, val) => classNames.push(createStyle(key, val, media, children))
  const appendClassName = (className) => classNames.push(className)

  for (let key in obj) {
    const value = obj[key]
    const type = typeof value

    if (isValue(value)) {
      appendStyle(key, value)
      continue
    }
    if (isArr(value)) {
      value.forEach((val) => appendStyle(key, val))
      continue
    }
    if (isPseudoSelector(key)) {
      parse(value, media, children + key).forEach(appendClassName)
      continue
    }
    if (isKeyframe(key)) {
      createKeyframe(key, value)
      continue
    }
    if (isMediaQuery(key)) {
      parse(value, key, children).forEach(appendClassName)
      continue
    }
    parse(value, media, children + ' ' + key).forEach(appendClassName)
    continue
  }

  return classNames
})

const keyframeReducer = (acc, value, prop) => ([
  ...acc,
  `${kebab(prefixProperty(prop))}:${prefixValue(prop, addPx(prop, value))};`
])

const parseKeyframes = (value) => (
  keys(value).map((frame) => (
    `${frame} {${reduce(value[frame], keyframeReducer, []).join('')}}`
  )).join(' ')
)

const createKeyframe = (key, value) => {
  if (!cxsync.cache[key]) {
    const name = key.replace('@keyframes ', '')
    const frames = parseKeyframes(value)
    keyframeSheet.insert(`@${cssPrefix}keyframes ${name} {${frames}}`)
    keyframeSheet.insert(`@keyframes ${name} {${frames}}`)
  }
  cxsync.cache[key] = true
}

const createStyle = (key, value, media, children = '') => {
  const prefix = (media || '') + children
  const id = key + value + prefix
  const dupe = cxsync.cache[id]

  if (dupe) return dupe

  const prop = kebab(prefixProperty(key))
  const val = prefixValue(key, addPx(key, value))
  const className = createClassName(prop, value, prefix)
  const selector = '.' + className + children
  const rule = `${selector}{${prop}:${val}}`

  if (media) {
    mediaSheet.insert(`${media}{${rule}}`)
  } else {
    sheet.insert(rule)
  }

  cxsync.cache[id] = className

  return className
}

const abbr = (str) => str
  .split('-')
  .map(c => c.charAt(0))
  .join('')

const createClassName = (prop, value, prefix) => {
  const base = (shorthands.indexOf(prop) > -1
    ? abbr(prop)
    : prop).replace(/^-/, '')
  const parts = combine('-')(
    options.prefix ? options.prefix : null,
    prefix ? clean(prefix) : null,
    base,
    clean(value)
  )

  const className = parts.length < 24 ? parts : hash(parts)
  return className
}

const BLANK_REG = /[\(\)#]/g
const P_REG = /%/g
const SYMBOL_REG = /[&,:"\s]/g
const AT_REG = /@/g
const DOT_REG = /\./g
const EXCL_REG = /!/g

export const clean = memoize((str) => ('' + str)
  .replace(BLANK_REG, '')
  .replace(P_REG, 'P')
  .replace(SYMBOL_REG, '_')
  .replace(AT_REG, '_')
  .replace(DOT_REG, 'p')
  .replace(EXCL_REG, '_')
)

export const combine = (str = '') => (...args) => args
  .filter(a => a !== null)
  .join(str)

export const addPx = (prop, value) => {
  if (typeof value !== 'number') return value
  if (unitlessProps.indexOf(prop) > -1) return value
  return value + 'px'
}

cxsync.cache = {}
cxsync.reset = reset
cxsync.getCss = getCss
cxsync.setOptions = setOptions

export default cxsync
