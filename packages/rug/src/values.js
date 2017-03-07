import pipe from 'lodash/fp/pipe'
import rgb2string from 'pure-color/convert/rgb2string'
import reduce from 'lodash/reduce'

import {
  isInRange,
  calcExponent,
  calcModularScale,
  addUnit,
  opacify,
  getContrastColor
} from './utils.js'

export { base } from './constants.js'

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

const brandColors = {
  green: [27, 171, 107],
  charcoal: [32, 58, 68],
  grey: [122, 137, 143],
  white: [255, 255, 255],
  lightgreen: [86, 216, 130],
  blue: [36, 145, 187],
  lightblue: [210, 240, 247],
  silver: [235, 241, 243],
  cyan: [115, 212, 250],
  pink: [238, 99, 143],
  red: [250, 107, 107],
  yellow: [250, 206, 95],
  orange: [248, 148, 99],
  purple: [156, 138, 212]
}

const buildColors = (colors) => reduce(colors, (acc, color) => ({
  ...acc,
  [color]: rgb2string(brandColors[color])
}), {})

/**
 * Primary Colors
 */

export const primary = buildColors([
  'green',
  'charcoal',
  'grey',
  'white'
])

/**
 * Secondary Colors
 */

export const secondary = buildColors([
  'lightgreen',
  'blue',
  'lightblue',
  'silver'
])

/**
 * Tertiary Colors
 */

export const tertiary = buildColors([
  'cyan',
  'pink',
  'red',
  'yellow',
  'orange',
  'purple'
])

/**
 * All Colors
 */

export const color = {
  ...primary,
  ...secondary,
  ...tertiary,
  cta: {
    darker: primary.green,
    dark: primary.green,
    medium: secondary.blue,
    light: secondary.blue,
    lighter: primary.white
  },
  text: {
    darker: primary.charcoal,
    dark: primary.grey,
    medium: secondary.blue,
    light: secondary.lightblue,
    lighter: primary.white
  },
  bg: {
    darker: primary.charcoal,
    dark: primary.charcoal,
    medium: secondary.lightblue,
    light: secondary.silver,
    lighter: primary.white
  },
  border: {
    darker: primary.grey,
    dark: primary.grey,
    medium: secondary.silver,
    light: secondary.silver,
    lighter: primary.white
  },
  action: {
    darker: primary.grey,
    dark: primary.grey,
    medium: secondary.blue,
    light: primary.white,
    lighter: primary.white
  },
  callout: {
    darker: secondary.blue,
    dark: secondary.blue,
    medium: secondary.blue,
    light: secondary.lightgreen,
    lighter: secondary.lightgreen
  },
  accent: {
    darker: secondary.blue,
    dark: secondary.blue,
    medium: secondary.lightblue,
    light: secondary.lightgreen,
    lighter: secondary.lightgreen
  },
  status: {
    darker: tertiary.red,
    dark: tertiary.orange,
    medium: tertiary.yellow,
    light: tertiary.cyan,
    lighter: tertiary.pink
  }
}

const contrast = (colorName) => (
  getContrastColor({dark: color.charcoal, light: color.white})(brandColors[colorName])
)

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
  `0 ${size(1)} ${size(2)} ${size(3)} ${opacify(0.2, color.grey)}`
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
