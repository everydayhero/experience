import {Link} from 'react-router'
import React from 'react'
import {comp} from '@edh/stranger'
import { utils } from '@edh/rug'

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
  paddingTop: size(3),
  paddingBottom: size(3),
  paddingLeft: child ? size(6) : size(5),
  paddingRight: size(5),
  lineHeight: leading.ui,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: active ? color.text.darker : color.text.dark,
  fontWeight: active && font.weight.bold,
  transition: 'all .2s ease-in-out',
  ':hover': {
    color: color.text.darker,
    backgroundColor: utils.opacify(0.05, color.bg.darker),
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
