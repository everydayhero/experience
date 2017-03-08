import React, { PropTypes } from 'react'
import stranger from '../'
import stylesToClasses from './stylesToClasses'

const withStyles = (styles = {}) => (Component = 'div') => {
  const WithStylesComponent = (props, { traits }) => {
    const combinedProps = {
      ...Component.defaultProps,
      ...props
    }
    const stylesIsFunction = typeof styles === 'function'
    const stylesObj = stylesIsFunction
      ? styles(combinedProps, traits || stranger.defaultTraits)
      : styles
    return (
      <Component
        {...combinedProps}
        styles={stylesObj}
        classNames={stylesToClasses(stylesObj)}
      />
    )
  }
  WithStylesComponent.withStyles = true
  WithStylesComponent.contextTypes = {
    traits: PropTypes.object
  }
  return WithStylesComponent
}

export default withStyles
