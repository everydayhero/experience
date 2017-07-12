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
  margin: `${size(4)} 0 ${size(5)}`
}))('div')

const redLine = (color, deg, thickness, width) => ({
  content: '""',
  display: 'block',
  height: thickness,
  borderRadius: thickness,
  width: width,
  backgroundColor: color,
  position: 'absolute',
  left: thickness,
  top: thickness,
  transform: `translate(-50%, -50%) rotate(${deg}deg)`
})

const Swatch = comp(({
  props: {
    bad,
    backgroundColor,
    textColor
  },
  traits: {
    type,
    colors,
    size,
    shadows
  }
}) => ({
  position: 'relative',
  margin: `0 ${size(3)} ${size(4)}`,
  boxShadow: shadows[1],
  borderRadius: size(5),
  width: size(7),
  height: size(6),
  lineHeight: size(6),
  textAlign: 'center',
  color: colors[textColor],
  fontWeight: type.weight.bold,
  fontSize: type.scale(0),
  backgroundColor: colors[backgroundColor],
  ':before': bad && redLine(colors.red, 45, size(3), size(5)),
  ':after': bad && redLine(colors.red, -45, size(3), size(5))
}))('div')
