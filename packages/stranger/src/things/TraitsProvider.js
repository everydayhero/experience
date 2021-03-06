import { Component } from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash/merge'
import stranger from '../'

class TraitsProvider extends Component {
  getChildContext () {
    return {
      traits: merge({}, stranger.defaultTraits, this.props.traits)
    }
  }

  render () {
    return this.props.children
  }
}

TraitsProvider.propTypes = {
  /**
  * The children who will be provided these traits
  */
  children: PropTypes.any.isRequired,

  /**
  * The traits to be added - colors, fonts, treatments, radiuses, shadows etc.
  */
  traits: PropTypes.object
}

TraitsProvider.defaultProps = {
  traits: {}
}

TraitsProvider.childContextTypes = {
  traits: PropTypes.object
}

export default TraitsProvider
