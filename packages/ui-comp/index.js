import React, { PropTypes } from 'react'
import stranger, { addRule } from '@everydayhero/stranger'
import 'minimal.css'

const { keys } = Object
const { isArray } = Array

const processStyleProps = (traits, {
  // Maybe size props.
  margin,
  marginY = margin,
  marginX = margin,
  marginTop = marginY,
  marginBottom = marginY,
  marginLeft = marginX,
  marginRight = marginX,
  padding,
  paddingY = padding,
  paddingX = padding,
  paddingTop = paddingY,
  paddingBottom = paddingY,
  paddingLeft = paddingX,
  paddingRight = paddingX,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  width,
  bottom,
  left,
  right,
  top,

  // Color props
  color,
  backgroundColor,
  borderColor,
  borderBottomColor,
  borderLeftColor,
  borderRightColor,
  borderTopColor,

  // Border radius props
  borderRadius,
  borderBottomLeftRadius = borderRadius,
  borderBottomRightRadius = borderRadius,
  borderTopLeftRadius = borderRadius,
  borderTopRightRadius = borderRadius,

  // Border props
  borderWidth,
  borderBottomWidth = borderWidth,
  borderLeftWidth = borderWidth,
  borderRightWidth = borderWidth,
  borderTopWidth = borderWidth,
  borderStyle,

  // Type props
  fontWeight,

  // Just value props.
  alignItems,
  alignSelf,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
  opacity,
  overflow,
  position,
  zIndex,

  ...props
}) => {
  const styleProps = {
    color: {
      backgroundColor,
      color,
      borderColor,
      borderBottomColor,
      borderLeftColor,
      borderRightColor,
      borderTopColor
    },
    size: {
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      height,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      width,
      bottom,
      left,
      right,
      top,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderTopLeftRadius,
      borderTopRightRadius
    },
    type: {
      fontWeight
    },
    values: {
      alignItems,
      alignSelf,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      justifyContent,
      opacity,
      overflow,
      position,
      zIndex
    }
  }

  const reduceStyles = (styles, traitKey) => (acc, key, i) => {
    const style = styles[key]
    const trait = traits[traitKey]
    const traitProcessMap = {
      size: (style) => {
        switch (typeof style) {
          case 'number': return trait(style)
          case 'object': return isArray(style) && trait([style[0], style[1]])
          default: return style
        }
      },
      color: (style) => trait[style] || style
    }
    if (!style) return acc
    return {
      ...acc,
      [key]: traitProcessMap[traitKey]
        ? traitProcessMap[traitKey](style)
        : style
    }
  }

  const reduceTraits = (acc, key, i) => {
    return {
      ...acc,
      ...keys(styleProps[key]).reduce(
        reduceStyles(styleProps[key], key), {}
      )
    }
  }
  return {
    propStyles: keys(styleProps).reduce(reduceTraits, {}),
    remainingProps: props
  }
}

const processStyles = (styles, traits, propStyles) => {
  const processedStyles = styles ? styles(traits) : {}
  return {
    ...processedStyles,
    ...propStyles
  }
}

/**
* The main component
*/

const Comp = ({
  as,
  styles,
  className,
  ...props
}, {
  traits = stranger.defaultTraits
}) => {
  const Component = as || 'div'
  const { propStyles, remainingProps } = processStyleProps(traits, props)
  const newClassName = className ||
    addRule(processStyles(styles, traits, propStyles))
  return (
    <Component
      {...remainingProps}
      className={newClassName}
    />
  )
}

Comp.propTypes = {
  styles: PropTypes.func
}

Comp.contextTypes = {
  traits: PropTypes.object
}

Comp.displayName = 'Comp'

export default Comp
