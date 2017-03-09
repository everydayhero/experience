import React from 'react'
import InlineSVG from 'react-svg-inline'

const LOGOS = {
  'standard': require('@everydayhero/brand-assets/images/standard.svg'),
  'standard-padded': require('@everydayhero/brand-assets/images/standard-padded.svg'),
  'standard-padded-markup': require('./images/standard-padded-markup.svg'),
  'mark-standard-padded': require('@everydayhero/brand-assets/images/mark-standard-padded.svg'),
  'mark-standard-padded-markup': require('./images/mark-standard-padded-markup.svg'),
  'powered-by-padded': require('@everydayhero/brand-assets/images/powered-by-padded.svg'),
  'inverted-padded-background': require('./images/inverted-padded-background.svg'),
  'mark-inverted-padded-background': require('./images/mark-inverted-padded-background.svg'),
  'powered-by-inverted-padded-background': require('./images/powered-by-inverted-padded-background.svg')
}

const Logo = ({type = 'standard', styles, ...props}) => (
  <InlineSVG {...props} svg={LOGOS[type]} />
)

export default Logo
