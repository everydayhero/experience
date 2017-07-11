import merge from 'lodash/merge'
import isNumber from 'lodash/isNumber'
import Color from 'color'

const base = 16

/**
 * General utilities
 */

const throwError = (msg) => { throw new Error(msg) }

export const isInRange = (min, max, num) => {
  if (!isNumber(num) || num < min || num > max) {
    return throwError(`Please provide a *number* greater or equal to ${min} and less than or equal to ${max}`)
  }
  return true
}

/**
 * Color utilities
 */

export const opacify = (hexColor, opacity = 1) =>
  Color(hexColor).fade(1 - opacity).string()

export const getContrastColor = ({
  dark,
  light
}) => (color) => {
  return Color(color).dark() ? light : dark
}

/**
 * Unit utilities
 */

export const rem = (val) => `${val / base}rem`
export const em = (val) => `${val / base}em`
export const px = (val) => val + 'px'

/**
 * Shadow utilities
 */

export const createShadow = (shadows = [], shadowColor = colors.charcoal) => (
  shadows.map((shadow) => (
    shadow.map((val, i) => (
      i === shadow.length - 1
      ? opacify(shadowColor, val)
      : val
    )).join(' ')
  )).join(',')
)

/**
 * Colors
 */

const brandColors = {
  green: '#1bab6b',
  charcoal: '#203a44',
  grey: '#7a898f',
  white: '#ffffff',
  lightgreen: '#56d882',
  blue: '#2491bb',
  lightblue: '#d2f0f7',
  silver: '#ebf1f3',
  cyan: '#73d4fa',
  purple: '#9c8ad4',
  pink: '#ee638f',
  red: '#fa6b6b',
  orange: '#f89463',
  yellow: '#face5f'
}

export const createColors = (configColors = {}) => {
  const brand = merge({}, brandColors, configColors.brand)

  const themeColors = {
    light: brand.white,
    soft: brand.silver,
    muted: brand.grey,
    dark: brand.charcoal,
    accent: brand.green,
    action: brand.blue,
    highlight: brand.lightblue,
    danger: brand.red,
    warning: brand.orange,
    note: brand.yellow,
    success: brand.lightgreen,
    header: 'transparent'
  }

  const theme = merge({}, themeColors, configColors.theme)

  const contrast = getContrastColor({
    dark: theme.dark,
    light: theme.light
  })

  const colorUtils = {
    contrast
  }

  const utils = merge({}, colorUtils, configColors.utils)

  return {
    ...brand,
    theme,
    utils
  }
}

const colors = createColors()

/**
 * Rhythm
 */

const rhythm = [
  0,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
  1024
]

const units = {
  rem,
  em,
  px
}

const space = (exponent, unit = 'rem') =>
  isInRange(0, rhythm.length - 1, exponent) &&
    units[unit](rhythm[Math.round(exponent)])

const size = space

/**
 * Type
 */

const defaultFontFamily = "-apple-system,BlinkMacSystemFont,'avenir next',avenir,helvetica,'helvetica neue',ubuntu,roboto,noto,'segoe ui',arial,sans-serif"
const sansSerif = "'Proxima Nova'," + defaultFontFamily
const monospace = "'Source Code Pro', 'Menlo', monospace"

/**
 * Typescale
 * sm = 1.125
 * md = 1.2
 * lg = 1.25
 */

const typeScale = {
  sm: [
    14,
    16,
    18,
    20,
    23,
    26,
    29,
    32
  ],
  md: [
    13,
    16,
    19,
    23,
    28,
    33,
    40,
    48
  ],
  lg: [
    13,
    16,
    20,
    25,
    31,
    39,
    49,
    61
  ]
}

const scale = (exponent, unit = 'rem', scale = 'lg') => (
  isInRange(-1, typeScale[scale].length - 2, exponent) &&
    units[unit](typeScale[scale][Math.round(exponent) + 1])
)

const type = {
  scale,
  family: {
    sansSerif,
    display: sansSerif,
    prose: sansSerif,
    ui: sansSerif,
    code: monospace
  },
  weight: {
    normal: 500,
    bold: 800
  },
  leading: {
    tightest: 1,
    tight: 1.25,
    prose: 1.5
  },
  tracking: {
    tightest: '-0.03em',
    tight: '-0.01em',
    normal: 0
  },
  measure: {
    minimum: '15em',
    narrow: '20em',
    normal: '30em',
    wide: '40em'
  }
}

/**
 * Border Radius
 */

const radius = {
  sm: size(2),
  md: size(2),
  lg: size(2),
  xl: size(2),
  circle: '100vw'
}

/**
 * Shadows
 */

const shadows = [
  'none',
  createShadow([
    [0, 0, em(2), 0.05],
    [0, em(1), em(5), 0.05]
  ]),
  createShadow([
    [0, 0, em(3), 0.08],
    [em(1), em(4), em(6), 0.06]
  ]),
  createShadow([
    [0, em(1), em(5), 0.07],
    [em(2), em(7), em(12), 0.05]
  ]),
  createShadow([
    [0, em(-1), em(2), 0.05],
    [em(1), em(5), em(7), 0.07],
    [em(3), em(12), em(17), 0.05]
  ]),
  createShadow([
    [0, em(-1), em(2), 0.05],
    [em(2), em(8), em(10), 0.1],
    [em(4), em(26), em(35), 0.05]
  ])
]

const media = {
  sm: `@media screen and (max-width: ${em(639)})`,
  md: `@media screen and (min-width: ${em(640)})`,
  lg: `@media screen and (min-width: ${em(880)})`,
  xl: `@media screen and (min-width: ${em(1024)})`
}

const traits = {
  colors,
  rhythm,
  space,
  size,
  radius,
  type,
  shadows,
  media
}

export const createTraits = (newTraits = {}) => merge({}, traits, newTraits)

const defaultTraits = createTraits()

export default defaultTraits
