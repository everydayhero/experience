import React, {PropTypes} from 'react'
import InlineSVG from 'react-svg-inline'
import reduce from 'lodash/reduce'
import find from 'lodash/find'
import startCase from 'lodash/startCase'
import {comp} from '@everydayhero/stranger'
import ICONS from './icons'

const SCALE_FACTOR = 1.25
const kinds = ['flat', 'mono', 'emoji']

const getIcon = (name) => find(ICONS, ({title}) => title === startCase(name))

const Icon = ({
  name,
  kind = 'flat',
  styles
}) => {
  const {src, title} = getIcon(name)
  return src && <SVGIcon styles={styles} kind={kind} svg={src} title={title} alt={title} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(kinds),
  styles: PropTypes.object
}

export default Icon

const sizes = {
  flat: {min: 0, max: 4},
  mono: {min: 3, max: 6},
  emoji: {min: 3, max: 6}
}

const kindsReducer = (kinds, currentKind, scaleFn) => reduce(kinds, (acc, kind) => ({
  ...acc,
  [` .visible-when-${kind}`]: {opacity: currentKind === kind ? '' : 0},
  [` .hidden-when-${kind}`]: {opacity: currentKind === kind ? 0 : ''},
  [` .currentColor-when-${kind}`]: {fill: currentKind === kind ? 'currentColor' : ''}
}), {
  minWidth: scaleFn(sizes[currentKind].min),
  minHeight: scaleFn(sizes[currentKind].min),
  maxWidth: scaleFn(sizes[currentKind].max),
  maxHeight: scaleFn(sizes[currentKind].max)
})

const SVGIcon = comp(({
  props: {
    kind
  },
  traits: {
    scale
  }
}) => ({
  ...kindsReducer(kinds, kind, scale),
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  width: `${SCALE_FACTOR}em`,
  height: `${SCALE_FACTOR}em`,
  ' svg': {
    width: '100%',
    height: '100%'
  }
}))(InlineSVG)
