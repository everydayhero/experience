import {comp} from '@everydayhero/stranger'

const statusColors = {
  green: 'lightgreen',
  amber: 'orange',
  red: 'red'
}

const Dot = comp(({
  props: {status = 'red'},
  traits: {
    colors,
    size,
    radius
  }
}) => ({
  backgroundColor: colors[statusColors[status]],
  width: '1em',
  height: '1em',
  borderRadius: radius.circle
}))('div')

export default Dot
