import {comp} from '@edh/stranger'

const statusColors = {
  green: 'lightgreen',
  amber: 'orange',
  red: 'red'
}

const Dot = comp(({
  props: {status = 'red'},
  traits: {
    color,
    size,
    radius
  }
}) => ({
  backgroundColor: color[statusColors[status]],
  width: '1em',
  height: '1em',
  borderRadius: radius(5)
}))('div', {removeProps: ['status']})

export default Dot
