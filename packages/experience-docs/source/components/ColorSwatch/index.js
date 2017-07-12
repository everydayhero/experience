import React from 'react'
import {comp} from '@everydayhero/stranger'
import upperFirst from 'lodash/upperFirst'
import Color from 'color'
import rug from '@everydayhero/rug'

const methods = {
  hex: (colorName) => rug.colors[colorName],
  rgb: (colorName) => Color(rug.colors[colorName]).rgb().string(),
  rug: (colorName) => `colors.${colorName}`
}

const Code = ({
  label,
  code
}) => (
  <tr>
    <td>{label}:</td>
    <td><code>{code}</code></td>
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
          {['hex', 'rgb', 'rug'].map((code) =>
            <Code
              key={code}
              label={code.toUpperCase()}
              code={methods[code](color)} />
          )}
        </tbody>
      </Table>
    </SwatchDetails>
  </Wrapper>
)

export default ColorSwatch

const Wrapper = comp(({
  traits: {
    space
  }
}) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: space(4)
}))('div')

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
    colors,
    size,
    media,
    shadows
  }
}) => ({
  boxShadow: shadows[1],
  borderRadius: '50%',
  width: size(6),
  height: size(6),
  backgroundColor: colors[colorName],
  [media.md]: {
    width: size(7),
    height: size(7)
  }
}))('div', {removeProps: ['colorName']})

const Table = comp(({
  traits: {
    type,
    size
  }
}) => ({
  padding: size(4),
  ' td': {
    padding: `0 ${size(4)} ${size(2)} 0`,
    lineHeight: type.leading.prose
  }
}))('table')
