import React from 'react'
import {comp} from '@edh/stranger'

import Logo from '../Logo'
import Navigation from '../Navigation'

const Header = ({
  activeRoute
}) => (
  <StyledHeader>
    <HeaderLogo type='standard' />

    <Navigation activeRoute={activeRoute} />
  </StyledHeader>
)

export default Header

const StyledHeader = comp(({
  traits: {
    size
  }
}) => ({
  padding: `${size(4)} ${size(3)}`,
  flex: '0 0 10rem'
}))('header')

const HeaderLogo = comp(({
  traits: {
    size
  }
}) => ({
  display: 'block',
  margin: `${size(2)} 0`
}))(Logo)
