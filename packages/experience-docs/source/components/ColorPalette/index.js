import React from 'react'
import {comp} from '@edh/stranger'
import rug from '@edh/rug'

const {keys} = Object

const ColorPalette = ({
  palette
}) => (
  <Wrapper>
    {keys(rug.color[palette]).map((colorName) => (
      <SwatchWrapper key={colorName}>
        <Swatch palette={palette} colorName={colorName} />
        {`${palette}.${colorName}`}
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
  justifyContent: 'center',
  margin: `${size(4)} 0 ${size(5)}`
}))('div')

const SwatchWrapper = comp(({
  traits: {
    font,
    size
  }
}) => ({
  flex: 1,
  flexShrink: 0,
  fontSize: font.scale(-1),
  textAlign: 'center',
  padding: size(3)
}))('div')

const Swatch = comp(({
  props: {
    palette,
    colorName
  },
  traits: {
    color,
    size
  }
}) => ({
  margin: `0 auto ${size(3)}`,
  border: `${size(1)} solid ${color.border.medium}`,
  borderRadius: '50%',
  width: size(6),
  height: size(6),
  backgroundColor: color[palette][colorName]
}))('div', {removeProps: ['palette', 'colorName']})
