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
  padding: `${size(5)}`,
  flex: '0 0 14rem'
}))('header')

const HeaderLogo = comp(({
  traits: {
    size
  }
}) => ({
  display: 'block',
  marginBottom: size(5)
}))(Logo, {cancelPassStyles: true})
