import {
  radius,
  size,
  scale
} from './values'

describe('size', () => {
  it('should default to 1', () => {
    const actual = size()
    const expected = 1
    expect(actual).toEqual(expected)
  })

  it('should only use round numbers', () => {
    const actualRounded = size(3)
    const actualFloating = size(2.5)
    const expected = 0.5
    expect(actualRounded).toEqual(expected)
    expect(actualFloating).toEqual(expected)
  })

  it('should only accept between 1 and 10 as an exponent', () => {
    const actualMin = () => size(-1)
    const actualMax = () => size(11)
    expect(actualMin).toThrowErrorMatchingSnapshot()
    expect(actualMax).toThrowErrorMatchingSnapshot()
  })
})

describe('scale', () => {
  it('should default to 1rem', () => {
    const actual = scale()
    const expected = '1rem'
    expect(actual).toEqual(expected)
  })

  it('should accept -1', () => {
    const actual = scale(-1)
    const expected = '0.8125rem'
    expect(actual).toEqual(expected)
  })

  it('should only accept exponents -1 or above', () => {
    const actual = () => size(-2)
    expect(actual).toThrowErrorMatchingSnapshot()
  })

  it('should only use round numbers', () => {
    const actualRounded = scale(2)
    const actualFloating = scale(2.2)
    const expected = '1.5625rem'
    expect(actualRounded).toEqual(expected)
    expect(actualFloating).toEqual(expected)
  })

  it('should accept a custom unit', () => {
    const actual = scale(6, 'em')
    const expected = '3.8125em'
    expect(actual).toEqual(expected)
  })

  it('should accept a custom scale', () => {
    const actual = scale(5, 'rem', 1.4)
    const expected = '5.375rem'
    expect(actual).toEqual(expected)
  })
})

describe('radius', () => {
  it('should default to 1rem', () => {
    const actual = radius()
    const expected = '1rem'
    expect(actual).toEqual(expected)
  })

  it('should only accept between 3 and 5', () => {
    const actualMin = () => radius(2)
    const actualMax = () => radius(6)
    expect(actualMin).toThrowErrorMatchingSnapshot()
    expect(actualMax).toThrowErrorMatchingSnapshot()
  })
})
