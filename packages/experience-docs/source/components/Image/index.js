import { comp } from '@edh/stranger'
import { PropTypes } from 'react'

const Image = comp(({
  props: {
    width,
    align
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
  maxWidth: width && measure[width]
}), { removeProps: ['width', 'align'] })('img')

Image.propTypes = {
  width: PropTypes.oneOf(['narrow', 'normal', 'wide']),
  align: PropTypes.oneOf(['left', 'center', 'right'])
}

export default Image
