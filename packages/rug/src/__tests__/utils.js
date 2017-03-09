import {
  opacify,
  luminosify,
  getContrastColor
} from '../utils'

import {
  color
} from '../values'

describe('opacify', () => {
  it('should return an rgba value from an rgb value', () => {
    const actual = opacify(0.7, color.green)
    const expected = 'rgba(27,171,107,0.7)'
    expect(actual).toEqual(expected)
  })
})

describe('luminosify', () => {
  it('should return a lighter color with a positive integer', () => {
    const actual = luminosify(5, color.green)
    const expected = 'rgb(50,185,120)'
    expect(actual).toEqual(expected)
  })

  it('should return a darker color with a negative integer', () => {
    const actual = luminosify(-5, color.green)
    const expected = 'rgb(0,157,95)'
    expect(actual).toEqual(expected)
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
