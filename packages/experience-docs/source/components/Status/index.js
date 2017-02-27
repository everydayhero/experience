import React, {PropTypes} from 'react'
import {comp} from '@edh/stranger'

const statusColors = {
  green: 'lightgreen',
  amber: 'orange',
  red: 'red'
}

const statusText = {
  green: 'Stable',
  amber: 'In progress',
  red: 'Incomplete'
}

const Status = ({
  status
}) => (
  <Wrapper>
    <Text>{statusText[status]}</Text>
    <ColorPill status={status} />
  </Wrapper>
)

const Wrapper = comp({
  float: 'right',
  marginTop: '10px',
  display: 'flex',
  alignItems: 'center'
})('div')

const Text = comp(({
  traits: {
    color,
    font,
    scale
  }
}) => ({
  color: color.charcoal,
  fontWeight: font.weight.bold,
  fontSize: scale(-1)
}))('div')

const ColorPill = comp(({
  props: {status = 'red'},
  traits: {
    color,
    size,
    radius
  }
}) => ({
  marginLeft: size(3),
  backgroundColor: color[statusColors[status]],
  width: size(5),
  height: size(4),
  borderRadius: radius(5)
}))('div', {removeProps: ['status']})

Status.propTypes = {
  status: PropTypes.oneOf(['green', 'amber', 'red'])
}

export default Status
