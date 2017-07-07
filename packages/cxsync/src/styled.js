import React from 'react'
import reduce from 'lodash/reduce'
import isFunction from 'lodash/isFunction'
import memoize from 'lodash/memoize'

import cxsync from './index'
import isWhitelisted from './propWhitelist'

const filteredProps = memoize(
  (props) => reduce(props, (acc, v, k) => {
    if (isWhitelisted(k)) acc[k] = v
    return acc
  }, {})
)

const filterProps = (props, Component) => (
  typeof Component === 'string' ? filteredProps(props) : props
)

const styled = (styles) => (Component) => ({className = '', ...props}) => (
  <Component
    {...(filterProps(props, Component))}
    className={
      `${className} ${cxsync(isFunction(styles)
        ? styles(props)
        : styles)}`
    }
  />
)

export default styled
