import {Link} from 'react-router'
import React from 'react'
import {comp} from '@edh/stranger'

import Dot from '../Dot'

const StyledNavigationLink = comp(({
  props: {
    active,
    child
  },
  traits: {
    size,
    color,
    font,
    leading,
    radius
  }
}) => ({
  paddingLeft: child && size(4),
  paddingTop: size(2),
  paddingBottom: size(2),
  lineHeight: leading.ui,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: active ? color.text.darkest : color.text.dark,
  fontWeight: active && font.weight.bold
}))(Link, {removeProps: ['active', 'child'], cancelPassStyles: true})

const NavigationLink = ({
  active,
  children,
  status,
  ...props
}) => (
  <StyledNavigationLink active={active} {...props}>
    <span>{children}</span>
    {active && status && <Dot status={status} />}
  </StyledNavigationLink>
)

export default NavigationLink
