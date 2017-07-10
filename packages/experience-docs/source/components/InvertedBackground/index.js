import {comp} from '@everydayhero/stranger'

const InvertedBackground = comp(({
  traits: {
    color,
    radius
  }
}) => ({
  background: color.bg.dark,
  radius: radius(3)
}))('div')

export default InvertedBackground
