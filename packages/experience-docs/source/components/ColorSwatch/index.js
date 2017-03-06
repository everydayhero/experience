import React from 'react'
import {comp} from '@edh/stranger'
import upperFirst from 'lodash/upperFirst'
import parse from 'pure-color/parse/rgb'
import rgb2hex from 'pure-color/convert/rgb2hex'
import rgb2cmyk from 'pure-color/convert/rgb2cmyk'
import rug from '@edh/rug'

const {round} = Math
const prettifyCMYK = (cmyk) => cmyk.map((c) => round(c)).join(' ')
const prettifyRGB = (rgb) => rgb.replace(/,/g, ', ')
const prettifyHEX = (hex) => hex.toUpperCase()
const hex = (rgb) => rgb2hex(parse(rgb))
const cmyk = (rgb) => rgb2cmyk(parse(rgb))

const methods = {
  hex: (colorName) => prettifyHEX(hex(rug.color[colorName])),
  rgb: (colorName) => prettifyRGB(rug.color[colorName]),
  cmyk: (colorName) => prettifyCMYK(cmyk(rug.color[colorName])),
  rug: (colorName) => `color.${colorName}`
}

const Code = ({
  label,
  code
}) => (
  <tr>
    <td>{label}:</td>
    <td>{code}</td>
  </tr>
)

const ColorSwatch = ({
  color
}) => (
  <Wrapper>
    <Swatch colorName={color} />
    <SwatchDetails>
      <h4>{upperFirst(color)}</h4>
      <Table>
        <tbody>
          {['hex', 'rgb', 'cmyk', 'rug'].map((code) => <Code key={code} label={code.toUpperCase()} code={methods[code](color)} />)}
        </tbody>
      </Table>
    </SwatchDetails>
  </Wrapper>
)

export default ColorSwatch

const Wrapper = comp({
  display: 'flex',
  alignItems: 'center'
})('div')

const SwatchDetails = comp(({
  traits: {size}
}) => ({
  padding: size(4),
  ' h3': {
    marginTop: 0
  }
}))('div')

const Swatch = comp(({
  props: {colorName},
  traits: {
    color,
    size,
    media
  }
}) => ({
  border: `${size(1)} solid ${color.border.medium}`,
  borderRadius: '50%',
  width: size(6),
  height: size(6),
  backgroundColor: color[colorName],
  [media.md]: {
    width: size(7),
    height: size(7)
  }
}))('div', {removeProps: ['colorName']})

const Table = comp(({
  traits: {color, size}
}) => ({
  padding: size(4),
  ' td': {
    padding: `0 ${size(4)} ${size(2)} 0`,
    ':first-child': {
      color: color.text.dark
    }
  }
}))('table')
