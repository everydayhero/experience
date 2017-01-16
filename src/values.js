import pipe from 'lodash/fp/pipe'

import {
  isInRange,
  calcExponent,
  calcModularScale,
  addUnit,
  opacify
} from './utils.js'

export { base } from './constants.js'

/**
 * Functial Values
 * ***************
 */

/**
 * Size
 */

export const size = (exponent = 4, unit = 'rem') => pipe(
  isInRange(0, 10),
  calcExponent(2),
  addUnit(unit)
)(exponent, unit)

/**
 * Type Scale
 */

export const scale = (
  exponent = 0,
  unit = 'rem',
  scale = 1.25
) => pipe(
  isInRange(-1, 6),
  calcModularScale(scale),
  addUnit(unit)
)(exponent)

/**
 * Border Radius
 */

export const radius = (
  exponent = 4,
  unit = 'rem'
) => pipe(
  isInRange(3, 5),
  calcExponent(2),
  addUnit(unit)
)(exponent)

/**
 * Primitive Values
 * ****************
 */

/**
 * Primary Colors
 */

export const green = '#0DA74E'
export const blue = '#2EB6EA'
export const lightgreen = '#4BD672'

/**
 * Secondary Colors
 */

const yellow = '#F9DA40'
const orange = '#FD9927'
const pink = '#FD669E'

/**
 * Tertiary Colors
 */

const greenblue = '#1FB09F'
const bluepurple = '#5A95E8'
const purple = '#A986D9'
const red = '#F75B66'
const redorange = '#FE732C'
const orangeyellow = '#FCBA14'

/**
 * Neutral Colors
 */

const dark = '#62757C'
const darker = '#415760'
const darkest = '#203A44'

const light = '#F2F3F4'
const lighter = '#F8F9F9'
const lightest = '#FFFFFF'

/**
 * State Based Colors
 */

const primary = green
const highlight = blue
const success = green
const warning = orange
const danger = red

/**
 * All Colors
 */

export const color = {
  green,
  blue,
  lightgreen,
  yellow,
  orange,
  pink,
  greenblue,
  bluepurple,
  purple,
  red,
  redorange,
  orangeyellow,
  dark,
  darker,
  darkest,
  light,
  lighter,
  lightest,
  primary,
  success,
  highlight,
  warning,
  danger
}

/**
 * Opacity
 */

export const opacity = {
  lightest: 0.6,
  light: 0.8
}

/**
 * Shadows
 */

export const shadows = [
  'none',
  `0 ${size(1)} ${size(2)} ${size(3)} ${opacify(0.1, dark)}`
]

/**
 * Font
 */

const defaultFontFamily = "-apple-system,BlinkMacSystemFont,'avenir next',avenir,helvetica,'helvetica neue',ubuntu,roboto,noto,'segoe ui',arial,sans-serif"
const sansSerif = "'Proxima Nova'," + defaultFontFamily

export const font = {
  scale,
  family: {
    sansSerif,
    display: sansSerif,
    prose: sansSerif,
    ui: sansSerif
  },
  weight: {
    normal: 500,
    bold: 800
  }
}

/**
 * Leading
 */

export const leading = {
  display: 1,
  ui: 1.25,
  prose: 1.5
}

/**
 * Tracking
 */

export const tracking = {
  display: '-.3em',
  normal: 0
}

/**
 * Measure
 */

export const measure = {
  narrow: '20em',
  normal: '30em',
  wide: '40em'
}

/**
 * Border
 */

export const border = {
  width: size(1)
}
