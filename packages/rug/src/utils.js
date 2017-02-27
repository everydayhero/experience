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

export const opacify = (o, rgb) => rgb.replace('b(', 'ba(').replace(')', `,${o})`)

export const getContrastColor = ({dark, light}) => ([r, g, b]) => (
  (((r*299)+(g*587)+(b*114))/1000) <= 128 ? light : dark
)
