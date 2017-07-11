import React from 'react'
import {comp} from '@everydayhero/stranger'
import rug from '@everydayhero/rug'

const {keys} = Object

const ColorPalette = ({
  palette
}) => (
  <Wrapper>
    {keys(rug.colors[palette]).map((colorName) => (
      <SwatchWrapper key={colorName}>
        <Swatch palette={palette} colorName={colorName} />
        <div><code>{`${colorName}`}</code></div>
      </SwatchWrapper>
    ))}
  </Wrapper>
)

export default ColorPalette

const Wrapper = comp(({
  traits: {size}
}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: `${size(4)} -${size(3)} ${size(5)}`
}))('div')

const SwatchWrapper = comp(({
  traits: {
    type,
    size
  }
}) => ({
  flexShrink: 0,
  fontSize: type.scale(-1),
  textAlign: 'center',
  padding: size(3)
}))('div')

const Swatch = comp(({
  props: {
    palette,
    colorName
  },
  traits: {
    colors,
    size,
    shadows
  }
}) => ({
  margin: `0 auto ${size(3)}`,
  borderRadius: '50%',
  width: size(6),
  height: size(6),
  boxShadow: shadows[1],
  backgroundColor: colors[palette][colorName]
}))('div')
