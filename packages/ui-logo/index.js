import React, {PropTypes} from 'react'
import {camelCase} from 'lodash'
import {comp} from '@everydayhero/stranger'
import * as logos from '@everydayhero/brand-assets'

const Logo = ({
  type = 'logo',
  padded = true
}) => (
  <LogoWrapper>
    {logos[camelCase(type)]}
  </LogoWrapper>
)

Logo.propTypes = {
  type: PropTypes.oneOf([
    'logo',
    'logo-inverted',
    'mark',
    'mark-inverted',
    'powered-by',
    'powered-by-inverted'
  ]),
  padded: PropTypes.bool
}

export default Logo

// Styled components
const LogoWrapper = comp(({
  traits: {
    size
  }
}) => ({
  padding: size(4)
}))('div')
