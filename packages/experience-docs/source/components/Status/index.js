import React, {PropTypes} from 'react'
import {comp} from '@everydayhero/stranger'

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
  traits: {
    size
  }
}) => ({
  display: 'flex',
  alignItems: 'center',
  ' > *:last-child': {
    marginLeft: size(3)
  }
}))('div')

const Text = comp(({
  traits: {
    colors,
    type
  }
}) => ({
  flex: 1,
  fontSize: type.scale(-1),
  whiteSpace: 'nowrap',
  color: colors.charcoal,
  fontWeight: type.weight.bold
}))('div')

Status.propTypes = {
  status: PropTypes.oneOf(['green', 'amber', 'red'])
}

export default Status
