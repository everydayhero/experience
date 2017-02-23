import { PropTypes } from 'react'
import mapProps from 'recompose/mapProps'
import getContext from 'recompose/getContext'
import pipe from 'lodash/fp/pipe'
import omit from 'lodash/omit'
import merge from 'lodash/merge'
import rug from '@edh/rug'
import { addRule } from '../'

export const strangerComp = (styles = {}) =>
  (Component = 'div', options = {}) => (
    pipe(
      mapProps(props => {
        const {
          traits,
          styles: existingStyles,
          ...rest
        } = props
        const stylesObj = typeof styles === 'function'
          ? styles({ props: rest, traits: traits || rug })
          : styles
        const mergedStyles = existingStyles
          ? merge({}, stylesObj, existingStyles)
          : stylesObj
        const className = addRule(mergedStyles)
        return {
          ...options.removeProps ? omit(rest, options.removeProps) : rest,
          ...typeof Component !== 'string' && !options.cancelPassStyles && { styles: mergedStyles },
          className
        }
      }),
      getContext({ traits: PropTypes.object })
  )(Component)
)

export default strangerComp
