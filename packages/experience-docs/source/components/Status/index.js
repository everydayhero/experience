import React, {PropTypes} from 'react'
import {comp} from '@edh/stranger'

import Dot from '../Dot'

const statusText = {
  green: 'Stable',
  amber: 'In review',
  red: 'Incomplete'
}

const Status = ({
  status
}) => (
  <Wrapper>
    <Text>{statusText[status]}</Text>
    <Dot status={status} />
  </Wrapper>
)

const Wrapper = comp(({
  traits: {size}
}) => ({
  display: 'flex',
  alignItems: 'center',
  '> * + *': {
    marginLeft: size(3)
  }
}))('div')

const Text = comp(({
  traits: {
    color,
    font,
    scale
  }
}) => ({
  flex: 1,
  fontSize: scale(-1),
  whiteSpace: 'nowrap',
  color: color.charcoal,
  fontWeight: font.weight.bold
}))('div')

Status.propTypes = {
  status: PropTypes.oneOf(['green', 'amber', 'red'])
}

export default Status
