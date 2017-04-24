import React, {PropTypes} from 'react'
import camelCase from 'lodash/camelCase'
import SVGInline from 'react-svg-inline'
import {comp} from '@everydayhero/stranger'
import * as logos from '@everydayhero/brand-assets'

const Logo = ({
  type = 'logo',
  padded = true,
  inverted
}) => {
  const logoName = camelCase(type) + (inverted ? 'Inverted' : '')
  const svg = logos[logoName]
  return (
    svg !== undefined &&
    <LogoWrapper padded={padded}>
      <SVGInline svg={svg} />
    </LogoWrapper>
  )
}

Logo.propTypes = {
  type: PropTypes.oneOf([
    'logo',
    'mark',
    'powered-by'
  ]),
  inverted: PropTypes.bool,
  padded: PropTypes.bool
}

export default Logo

// Styled components
const LogoWrapper = comp(({
  props: {
    padded
  },
  traits: {
    size
  }
}) => ({
  padding: padded && size(4),
  // Required kludge forcing inline SVGs to display properly in Safari/iOS
  ' svg': {
    width: '100%'
  }
}))('div')
