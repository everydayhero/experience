import pipe from 'lodash/fp/pipe'
import reduce from 'lodash/reduce'

import {
  isInRange,
  calcExponent,
  calcModularScale,
  addUnit,
  getContrastColor,
  shadow,
  createGradient,
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

export const shadows = [
  'none',
  `0 ${size(1)} ${size(2)} ${size(3)} ${opacify(color.border.dark, 0.2)}`,
  shadow(color.bg.darker)
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
