import React from 'react'

const LOGOS = {
  'standard': require('@edh/brand-assets/images/standard.svg'),
  'standard-padded': require('@edh/brand-assets/images/standard-padded.svg'),
  'standard-padded-markup': require('./images/standard-padded-markup.svg'),
  'mark-standard-padded': require('@edh/brand-assets/images/mark-standard-padded.svg'),
  'mark-standard-padded-markup': require('./images/mark-standard-padded-markup.svg'),
  'powered-by-padded': require('@edh/brand-assets/images/powered-by-padded.svg'),
  'inverted-padded-background': require('./images/inverted-padded-background.svg'),
  'mark-inverted-padded-background': require('./images/mark-inverted-padded-background.svg'),
  'powered-by-inverted-padded-background': require('./images/powered-by-inverted-padded-background.svg')
}

const Logo = ({type = 'standard', ...props}) => (
  <img {...props} src={LOGOS[type]} />
)

export default Logo
