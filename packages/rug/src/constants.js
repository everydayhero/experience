import rgb2string from 'pure-color/convert/rgb2string'
import reduce from 'lodash/reduce'

export const base = 16

export const brandColors = {
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
