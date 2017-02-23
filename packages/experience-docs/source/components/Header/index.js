import React from 'react'
import {comp} from '@edh/stranger'

import Logo from '../Logo'
import Navigation from '../Navigation'

const Header = ({
  activeRoute
}) => (
  <StyledHeader>
    <Logo type='standard' />

    <Navigation activeRoute={activeRoute} />
  </StyledHeader>
)

export default Header

const StyledHeader = comp(({
  traits: {
    size
  }
}) => ({
  padding: size(2),
  flex: '0 1 8rem'
}))('header')
