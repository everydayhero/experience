import React from 'react'
import {comp} from '@edh/stranger'

import NavigationList from '../NavigationList'

const StyledNavigation = comp(({
  traits: {
    color,
    size,
    font
  }
}) => ({
  overflow: 'auto',
  fontSize: font.scale(1),
  minWidth: '14rem',
  paddingTop: size(5),
  paddingLeft: size(5),
  paddingRight: size(5),
  paddingBottom: size(5),
  backgroundColor: color.bg.light,
  WebKitOverflowScrolling: 'touch'
}))('nav')

const Navigation = ({
  activeRoute,
  routes
}) => (
  <StyledNavigation>
    <NavigationList routes={routes} activeRoute={activeRoute} />
  </StyledNavigation>
)

export default Navigation
