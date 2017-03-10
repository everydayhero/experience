import curry from 'lodash/fp/curry'
import pipe from 'lodash/fp/pipe'
import parse from 'pure-color/parse'
import rgb2lab from 'pure-color/convert/rgb2lab'
import lab2xyz from 'pure-color/convert/lab2xyz'
import xyz2rgb from 'pure-color/convert/xyz2rgb'
import rgb2string from 'pure-color/convert/rgb2string'

const lab2rgb = pipe(lab2xyz, xyz2rgb)

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

/**
 * Color Utilities
 */

export const addUnit = curry((unit, value) => `${value}${unit}`)

export const opacify = (rgb, o = 1) => rgb.replace('b(', 'ba(').replace(')', `,${o})`)

export const getContrastColor = ({dark, light}) => (color) => {
  const [r, g, b] = typeof color === 'string' ? parse(color) : color
  return (((r * 299) + (g * 587) + (b * 114)) / 1000) <= 128 ? light : dark
}

const transformLab = (transform) => pipe(
  parse,
  rgb2lab,
  transform,
  lab2rgb,
  rgb2string
)

const modL = (amount) => ([L, a, b]) => ([L + amount, a, b])

export const luminosify = (color, amount = 0) => transformLab(modL(amount))(color)

export const createGradient = curry((type, degrees, color, lighten = false) => (
  `${type}-gradient(${degrees}, ${lighten ? color : luminosify(color, -5)}, ${lighten ? luminosify(color, 5) : color})`
))

export const shadow = (color) => (
  `0 4px 6px ${opacify(color, 0.11)}, 0 1px 3px ${opacify(color, 0.08)}`
)
