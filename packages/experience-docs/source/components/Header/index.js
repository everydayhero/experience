import React from 'react'
import {comp} from '@edh/stranger'
import { Link } from 'react-router'

import Logo from '../Logo'
import Status from '../Status'

const Header = ({
  status
}) => (
  <StyledHeader>
    <LogoLink to='/'><Logo type='standard' /></LogoLink>
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
  justifyContent: 'space-between',
  '> * + *': {
    marginLeft: size(4),
    transform: 'translateY(.15rem)'
  }
}))('header')

const LogoLink = comp({
  display: 'block',
  width: '100%',
  minWidth: '9rem',
  maxWidth: '12rem'
})(Link)
