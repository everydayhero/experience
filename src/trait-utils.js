import reduce from 'lodash/reduce'
import rgb2lab from 'pure-color/convert/rgb2lab'
import lab2xyz from 'pure-color/convert/lab2xyz'
import xyz2rgb from 'pure-color/convert/xyz2rgb'
import rgb2string from 'pure-color/convert/rgb2string'

const lab2rgb = (lab) => xyz2rgb(lab2xyz(lab))
const {pow, min} = Math

// Colors, tints, and transparencies
const defaultTints = {
  darker: 0.8,
  dark: 0.88,
  light: 1.12,
  lighter: 1.2
}

const defaultOpacities = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]

const tint = (lab, lMod) => {
  const moddedLab = [...lab]
  moddedLab[0] *= lMod
  moddedLab[1] *= ((lMod - 1) / 2) + 1
  return moddedLab
}

const opacityGenerator = (name, rgb, opacities) => (
  reduce(opacities, (acc, o) => ({
    ...acc,
    [`${name}_${o}`]: rgb.replace('b(', 'ba(').replace(')', `,${o / 100})`)
  }), {[name]: rgb})
)

const tintGenerator = (name, lab, tints, opacities) => (
  reduce(tints, (acc, lMod, suffix) => ({
    ...acc,
    ...opacityGenerator(`${name}_${suffix}`, rgb2string(lab2rgb(tint(lab, lMod))), opacities)
  }), opacityGenerator(name, rgb2string(lab2rgb(lab)), opacities))
)

export const colorGenerator = (colors, tints = defaultTints, opacities = defaultOpacities) => (
  reduce(colors, (acc, rgb, name) => ({
    ...acc,
    ...tintGenerator(name, rgb2lab(rgb), tints, opacities)
  }), {})
)

// Fluid typography
const scaledType = (size, typeLevel, scale) => (
  min(pow(scale, typeLevel), 1) * size
)
const calc = (minSize, maxSize, minViewWidth, maxViewWidth, unit = 'px') => (
  `calc(${minSize}${unit} + (${maxSize - minSize}) * ((100vw - ${minViewWidth}${unit}) / (${maxViewWidth - minViewWidth})))`
)
export const fluidType = ({
  minFontSize = 14,
  maxFontSize = 20,
  minLeading = 1.2,
  maxLeading = 1.62,
  minViewWidth = 320,
  maxViewWidth = 1600,
  minTypeScale = 1.1,
  maxTypeScale = 1.4,
  typeLevel = 0
} = {}) => ({
  fontSize: minFontSize,
  lineHeight: minLeading,
  [`@media screen and (min-width: ${minViewWidth})`]: {
    fontSize: calc(scaledType(minFontSize, typeLevel, minTypeScale), scaledType(maxFontSize, typeLevel, maxTypeScale), minViewWidth, maxViewWidth),
    lineHeight: calc(minLeading, maxLeading, minViewWidth, maxViewWidth, 'em')
  },
  [`@media screen and (min-width: ${maxViewWidth})`]: {
    fontSize: maxFontSize,
    lineHeight: maxLeading
  }
})
