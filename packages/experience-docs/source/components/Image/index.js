import { comp } from '@edh/stranger'
import React, { PropTypes } from 'react'
import InlineSVG from 'react-svg-inline'
import includes from 'lodash/includes'

const Image = ({
  src,
  ...props
}) => (
  includes(src, 'svg')
    ? <Svg {...props} svg={src} />
    : <Img {...props} src={src} />
)

Image.propTypes = {
  width: PropTypes.oneOf(['narrow', 'normal', 'wide']),
  align: PropTypes.oneOf(['left', 'center', 'right'])
}

export default Image

const ImgBase = comp(({
  props: {
    width,
    align = 'center'
  },
  traits: {
    size,
    measure
  }
}) => ({
  display: 'block',
  marginBottom: size(5),
  marginLeft: (align === 'center' || align === 'right') && 'auto',
  marginRight: align === 'center' && 'auto',
  maxWidth: width && measure[width],
  borderRadius: size(3),
  overflow: 'hidden'
}), { removeProps: ['width', 'align'] })

const Img = ImgBase('div')

const Svg = comp({
  width: '100%',
  height: '100%',
  ' svg': {
    width: '100%',
    height: '100%'
  }
})(ImgBase(InlineSVG))
