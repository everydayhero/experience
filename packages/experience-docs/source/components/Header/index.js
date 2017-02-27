import React from 'react'
import {comp} from '@edh/stranger'

import Logo from '../Logo'

const Header = ({
  activeRoute
}) => (
  <StyledHeader>
    <HeaderLogo type='standard' />
  </StyledHeader>
)

export default Header

const StyledHeader = comp(({
  traits: {
    size
  }
}) => ({
  padding: `${size(4)} 0 ${size(5)}`
}))('header')

const HeaderLogo = comp(({
  traits: {
    size
  }
}) => ({
  display: 'block',
  maxWidth: '12rem'
}))(Logo, {cancelPassStyles: true})