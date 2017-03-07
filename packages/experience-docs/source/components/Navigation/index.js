import React from 'react'
import {comp} from '@edh/stranger'

import NavigationList from '../NavigationList'

const StyledNavigation = comp(({
  traits: {
    color,
    size,
    font,
    media
  }
}) => ({
  [media.sm]: {
    fontSize: font.scale(1)
  },
  overflow: 'auto',
  minWidth: '14rem',
  paddingTop: size(5),
  paddingBottom: size(5),
  backgroundColor: color.bg.light,
  WebkitOverflowScrolling: 'touch'
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
