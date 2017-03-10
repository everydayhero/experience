import {
  opacify,
  luminosify,
  getContrastColor,
  gradient
} from '../utils'

import {
  color
} from '../values'

describe('opacify', () => {
  it('should return an rgba value from an rgb value', () => {
    const actual = opacify(color.green, 0.7)
    const expected = 'rgba(27,171,107,0.7)'
    expect(actual).toEqual(expected)
  })
})

describe('luminosify', () => {
  it('should return a lighter color with a positive integer', () => {
    const actual = luminosify(color.green, 5)
    const expected = 'rgb(50,185,120)'
    expect(actual).toEqual(expected)
  })

  it('should return a darker color with a negative integer', () => {
    const actual = luminosify(color.green, -5)
    const expected = 'rgb(0,157,95)'
    expect(actual).toEqual(expected)
  })

  it('should return the same color with zero/no integer', () => {
    const actual = luminosify(color.green)
    expect(actual).toEqual(color.green)
  })
})

describe('getContrastColor', () => {
  it('should return the light option when the color is dark', () => {
    const actual = getContrastColor({light: 'white', dark: 'black'})(color.charcoal)
    const expected = 'white'
    expect(actual).toEqual(expected)
  })

  it('should return the dark option when the color is light', () => {
    const actual = getContrastColor({light: 'white', dark: 'black'})(color.lightblue)
    const expected = 'black'
    expect(actual).toEqual(expected)
  })
})

describe('gradient', () => {
  it('should return a curried function to generate gradients', () => {
    const partial = gradient('test', '720deg')
    const actual = partial(color.green)
    const expected = `test-gradient(720deg, rgb(0,157,95), rgb(27,171,107))`
    expect(actual).toEqual(expected)
  })

  it('should generate a lighter gradient when lighten = true', () => {
    const partial = gradient('test', '720deg')
    const actual = partial(color.green, true)
    const expected = `test-gradient(720deg, rgb(27,171,107), rgb(50,185,120))`
    expect(actual).toEqual(expected)
  })
})
