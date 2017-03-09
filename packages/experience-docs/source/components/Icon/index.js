import React, {PropTypes} from 'react'
import InlineSVG from 'react-svg-inline'
import reduce from 'lodash/reduce'
import find from 'lodash/find'
import startCase from 'lodash/startCase'
import {comp} from '@everydayhero/stranger'
import {ICONS} from '../IconList'

const SCALE_FACTOR = 1.25
const kinds = ['flat', 'mono', 'emoji', 'sticker']

const getIcon = (icon) => find(ICONS, ({title}) => title === startCase(icon))

const Icon = ({
  name,
  icon,
  kind = 'flat'
}) => {
  const {src, title} = getIcon(icon)
  return src && <SVGIcon kind={kind} svg={src} title={title} alt={title} />
}

Icon.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(kinds)
}

export default Icon

const sizes = {
  flat: {min: 0, max: 4},
  mono: {min: 3, max: 6},
  emoji: {min: 3, max: 6},
  sticker: {min: 4, max: 6}
}

const kindsReducer = (kinds, currentKind, scaleFn) => reduce(kinds, (acc, kind) => ({
  ...acc,
  [` path.visible-when-${kind}`]: {opacity: currentKind === kind ? 1 : 0},
  [` path.hidden-when-${kind}`]: {opacity: currentKind === kind ? 0 : 1},
  [` path.currentColor-when-${kind}`]: {fill: currentKind === kind ? 'currentColor !important' : 'initial'}
}), {
  minWidth: scaleFn(sizes[currentKind].min),
  minHeight: scaleFn(sizes[currentKind].min),
  maxWidth: scaleFn(sizes[currentKind].max),
  maxHeight: scaleFn(sizes[currentKind].max)
})

const SVGIcon = comp(({
  props: {kind},
  traits: {scale}
}) => ({
  ...kindsReducer(kinds, kind, scale),
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  width: `${SCALE_FACTOR * 1}em`,
  height: `${SCALE_FACTOR * 1}em`,
  margin: kind === 'flat' ? `${SCALE_FACTOR * 0.2}em` : `${SCALE_FACTOR * 0.3}em`,
  ' svg': {
    width: '100%',
    height: '100%'
  }
}))(InlineSVG, {removeProps: ['kind'], cancelPassStyles: true})
