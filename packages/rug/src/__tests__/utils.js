import {
  opacify
} from '../utils'

import {
  color
} from '../values'

describe(opacify, () => {
  it('should default to return an rgba value from a hex', () => {
    const actual = opacify(0.7, color.green)
    const expected = 'rgba(27,171,107,0.7)'
    expect(actual).toEqual(expected)
  })
})
