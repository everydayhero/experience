import {
  opacify
} from '../utils'

import {
  green
} from '../values'

describe(opacify, () => {
  it('should default to return an rgba value from a hex', () => {
    const actual = opacify(0.7, green)
    const expected = 'rgba(13, 167, 78, 0.7)'
    expect(actual).toEqual(expected)
  })
})
