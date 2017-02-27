import {comp} from '@edh/stranger'
import Logo from '../Logo'

const LogoImg = comp(({
  traits: {size}
}) => ({
  display: 'block',
  margin: `${size(5)} auto`,
  width: '100%',
  height: '100%',
  maxWidth: size(8),
  maxHeight: size(7),
  borderRadius: size(3),
  overflow: 'hidden'
}))(Logo)

export default LogoImg
