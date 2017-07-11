import traits, {
  opacify,
  getContrastColor
} from '../'

const {
  colors,
  type,
  size
} = traits

describe('opacify', () => {
  it('should return an rgba value from an rgb value', () => {
    const actual = opacify(colors.green, 0.7)
    const expected = 'rgba(27, 171, 107, 0.7)'
    expect(actual).toEqual(expected)
  })
})

describe('getContrastColor', () => {
  it('should return the light option when the color is dark', () => {
    const actual = getContrastColor({light: 'white', dark: 'black'})(colors.charcoal)
    const expected = 'white'
    expect(actual).toEqual(expected)
  })

  it('should return the dark option when the color is light', () => {
    const actual = getContrastColor({light: 'white', dark: 'black'})(colors.lightblue)
    const expected = 'black'
    expect(actual).toEqual(expected)
  })
})

describe('size', () => {
  it('should always include an exponent', () => {
    const actual = () => size()
    expect(actual).toThrowErrorMatchingSnapshot()
  })

  it('should only use round numbers', () => {
    const actualRounded = size(3)
    const actualFloating = size(2.5)
    const expected = '0.5rem'
    expect(actualRounded).toEqual(expected)
    expect(actualFloating).toEqual(expected)
  })

  it('should only accept between 0 and 10 as an exponent', () => {
    const actualMin = () => size(-1)
    const actualMax = () => size(11)
    expect(actualMin).toThrowErrorMatchingSnapshot()
    expect(actualMax).toThrowErrorMatchingSnapshot()
  })
})

describe('type scale', () => {
  it('should always include an exponent', () => {
    const actual = () => type.scale()
    expect(actual).toThrowErrorMatchingSnapshot()
  })

  it('should accept -1', () => {
    const actual = type.scale(-1)
    const expected = '0.8125rem'
    expect(actual).toEqual(expected)
  })

  it('should only accept exponents -1 or above', () => {
    const actual = () => type.scale(-2)
    expect(actual).toThrowErrorMatchingSnapshot()
  })

  it('should only use round numbers', () => {
    const actualRounded = type.scale(2)
    const actualFloating = type.scale(2.2)
    const expected = '1.5625rem'
    expect(actualRounded).toEqual(expected)
    expect(actualFloating).toEqual(expected)
  })

  it('should accept a custom unit', () => {
    const actual = type.scale(6, 'em')
    const expected = '3.8125em'
    expect(actual).toEqual(expected)
  })

  it('should reference different scales', () => {
    const actual = type.scale(5, 'rem', 'sm')
    const expected = '1.8125rem'
    expect(actual).toEqual(expected)
  })
})
