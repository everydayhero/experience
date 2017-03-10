import pipe from 'lodash/fp/pipe'
import reduce from 'lodash/reduce'

import {
  isInRange,
  calcExponent,
  calcModularScale,
  addUnit,
  getContrastColor,
  createGradient,
  createShadow
} from './utils.js'

import {
  color,
  brandColors
} from './constants.js'

export {
  base,
  primary,
  secondary,
  tertiary,
  color
} from './constants.js'

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
 * Color
 */

export const contrast = (colorName) => (
  getContrastColor({dark: color.charcoal, light: color.white})(brandColors[colorName])
)

export const gradient = reduce({
  up: '350deg',
  right: '80deg',
  down: '170deg',
  left: '260deg'
}, (acc, degrees, direction) => ({
  ...acc,
  [direction]: createGradient('linear', degrees)
}), {
  radial: createGradient('radial', 'circle')
})

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

export const shadow = [
  'none',
  createShadow([
    [0, 0, size(1, 'em'), 0.14],
    [0, size(1, 'em'), size(2, 'em'), 0.1],
    [0, size(2, 'em'), '0.0625em', `-${size(1, 'em')}`, 0.14]
  ]),
  createShadow([
    [0, size(2, 'em'), size(2, 'em'), 0.1],
    [0, size(2, 'em'), size(4, 'em'), 0.12],
    [0, size(1, 'em'), size(2, 'em'), '-0.0625em', 0.2]
  ]),
  createShadow([
    [0, size(3, 'em'), size(4, 'em'), '-0.0625em', 0.14],
    [0, size(2, 'em'), size(4, 'em'), size(1, 'em'), 0.12],
    [0, size(2, 'em'), size(2, 'em'), '-0.1875em', 0.2]
  ]),
  createShadow([
    [0, size(4, 'em'), '1.5em', size(1, 'em'), 0.14],
    [0, size(3, 'em'), size(5, 'em'), size(2, 'em'), 0.12],
    [0, size(3, 'em'), '0.625em', '-0.3125em', 0.2]
  ]),
  createShadow([
    [0, size(4, 'em'), size(5, 'em'), size(1, 'em'), 0.14],
    [0, size(4, 'em'), '3em', size(3, 'em'), 0.12],
    [0, size(4, 'em'), size(4, 'em'), `-${size(3, 'em')}`, 0.2]
  ])
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
  minimum: '15em',
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

export const media = {
  sm: '@media screen and (max-width: 39.9375em)',
  md: '@media screen and (min-width: 40em)',
  lg: '@media screen and (min-width: 55em)',
  xl: '@media screen and (min-width: 64em)'
}
