import Color from 'color'
import curry from 'lodash/fp/curry'

import { base } from './constants.js'

/**
 * General Utilities
 */

const throwError = (msg) => { throw new Error(msg) }

export const isInRange = curry((min, max, num) =>
  (num < min || num > max)
    ? throwError(`Please provide a number greater than ${min} and less than ${max}`)
    : num
)

/**
 * Size Utilities
 */

export const calcExponent = curry((initial, exponent) =>
  Math.pow(initial, Math.round(exponent)) / base
)

export const calcModularScale = curry((scale, exponent) =>
  Math.round(base * Math.pow(scale, Math.round(exponent))) / base
)

export const addUnit = curry((unit, value) => `${value}${unit}`)

/**
 * Color Utilities
 */

export const opacify = curry((decimal, colorStr) => Color(colorStr).clearer(1 - decimal).rgbString())
export const tint = curry((decimal, colorStr) => Color(colorStr).mix(Color('white'), 1 - decimal).rgbString())
export const shade = curry((decimal, colorStr) => Color(colorStr).mix(Color('black'), 1 - decimal).rgbString())
export const lighten = curry((decimal, colorStr) => Color(colorStr).lighten(decimal).rgbString())
export const darken = curry((decimal, colorStr) => Color(colorStr).darken(decimal).rgbString())
