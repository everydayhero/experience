import React from 'react'
import PropTypes from 'prop-types'
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
      ? styles({ props: combinedProps, traits: traits || stranger.defaultTraits })
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
