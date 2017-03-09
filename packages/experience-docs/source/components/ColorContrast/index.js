import React from 'react'
import {comp} from '@everydayhero/stranger'

const ColorContrast = ({
  bad = true,
  textColors = [],
  backgroundColors = []
}) => (
  <Wrapper>
    {textColors.map((textColor) => backgroundColors.map((backgroundColor) =>
      <Swatch bad={bad} backgroundColor={backgroundColor} textColor={textColor}>
        {textColor}
      </Swatch>
    ))}
  </Wrapper>
)

export default ColorContrast

const Wrapper = comp(({
  traits: {size}
}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: `${size(4)} 0 ${size(5)}`
}))('div')

const redLine = (color, deg, thickness) => ({
  content: '""',
  display: 'block',
  height: thickness,
  width: '100%',
  backgroundColor: color,
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: `translate(-50%, -50%) rotate(${deg}deg)`
})

const Swatch = comp(({
  props: {
    bad,
    backgroundColor,
    textColor
  },
  traits: {
    font,
    color,
    size
  }
}) => ({
  position: 'relative',
  margin: `0 auto ${size(3)}`,
  border: `${size(1)} solid ${color.border.medium}`,
  borderRadius: size(5),
  width: size(7),
  height: size(6),
  lineHeight: size(6),
  textAlign: 'center',
  color: color[textColor],
  fontWeight: font.weight.bold,
  fontSize: font.scale(0),
  backgroundColor: color[backgroundColor],
  ':before': !bad ? {} : redLine(color.red, 30, size(1)),
  ':after': !bad ? {} : redLine(color.red, -30, size(1))
}))('div', {removeProps: ['bad', 'backgroundColor', 'textColor']})
