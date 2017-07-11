import React from 'react'
import {comp} from '@everydayhero/stranger'

import NavigationList from '../NavigationList'

const StyledNavigation = comp(({
  traits: {
    colors,
    size,
    type,
    media
  }
}) => ({
  paddingTop: size(5),
  paddingBottom: size(5),
  backgroundColor: colors.theme.soft,
  [media.sm]: {
    fontSize: type.scale(1)
  },
  [media.md]: {
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    width: '14rem',
    overflow: 'auto',
    height: '100%',
    WebkitOverflowScrolling: 'touch'
  }
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
