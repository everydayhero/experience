import React, { PropTypes } from 'react'
import pickBy from 'lodash/pickBy'
import merge from 'lodash/merge'
import stranger, { addRule } from '../'
import validAttr from './reactValidHtmlAttr.js'

const comp = (styles = {}) => (Component = 'div') => {
  const StrangerComponent = (props, { traits }) => {
    const {
      styles: existingStyles,
      ...rest
    } = props
    const stylesObj = typeof styles === 'function'
      ? styles({ props: rest, traits: traits || stranger.defaultTraits })
      : styles
    const mergedStyles = existingStyles
      ? merge({}, stylesObj, existingStyles)
      : stylesObj
    const className = addRule(mergedStyles)
    const propsToPass = Component.isStrange
      ? { ...rest, styles: mergedStyles }
      : pickBy(rest, validAttr(Component.propTypes))
    return (
      <Component
        {...propsToPass}
        className={className}
      />
    )
  }
  StrangerComponent.isStrange = true
  StrangerComponent.contextTypes = {
    traits: PropTypes.object
  }
  return StrangerComponent
}

export default comp
