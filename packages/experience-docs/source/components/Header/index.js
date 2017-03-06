import React from 'react'
import {comp} from '@edh/stranger'

import Logo from '../Logo'
import Status from '../Status'

const Header = ({
  status
}) => (
  <StyledHeader>
    <HeaderLogo type='standard' />
    {status && <Status status={status} />}
  </StyledHeader>
)

export default Header

const StyledHeader = comp(({
  traits: {
    size
  }
}) => ({
  display: 'flex',
  flexShrink: '1',
  alignItems: 'center',
  justifyContent: 'space-between'
}))('header')

const HeaderLogo = comp(({
  traits: {
    size
  }
}) => ({
  display: 'block',
  width: '100%',
  minWidth: '10rem',
  maxWidth: '12rem'
}))(Logo, {cancelPassStyles: true})
