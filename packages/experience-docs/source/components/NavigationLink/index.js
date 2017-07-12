import {Link} from 'react-router'
import React from 'react'
import {comp} from '@everydayhero/stranger'
import { opacify } from '@everydayhero/rug'

import Dot from '../Dot'

const StyledNavigationLink = comp(({
  props: {
    active,
    child
  },
  traits: {
    size,
    colors,
    type,
    radius
  }
}) => ({
  paddingTop: size(3),
  paddingBottom: size(3),
  paddingLeft: child ? size(6) : size(5),
  paddingRight: size(5),
  lineHeight: type.leading.tight,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: active ? colors.theme.dark : colors.theme.muted,
  fontWeight: active && type.weight.bold,
  transition: 'all .2s ease-in-out',
  ':hover': {
    color: colors.theme.dark,
    backgroundColor: opacify(colors.theme.dark, 0.05),
    '> :last-child': {
      opacity: 1
    }
  }
}))(Link, {removeProps: ['active', 'child'], cancelPassStyles: true})

const MenuDot = comp(({
  props: {
    active
  }
}) => ({
  opacity: active ? 1 : 0,
  transition: 'all .2s ease-in-out'
}))(Dot, {
  removeProps: ['active']
})

const NavigationLink = ({
  active,
  children,
  status = 'green',
  ...props
}) => (
  <StyledNavigationLink active={active} {...props}>
    <span>{children}</span>
    <MenuDot status={status} active={active} />
  </StyledNavigationLink>
)

export default NavigationLink
