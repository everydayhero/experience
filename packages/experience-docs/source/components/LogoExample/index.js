import {comp} from '@everydayhero/stranger'
import Logo from '../Logo'

const LogoImg = comp(({
  traits: {
    size
  }
}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: `${size(5)} auto`,
  width: '100%',
  maxWidth: size(8),
  borderRadius: size(3),
  overflow: 'hidden',
  ' svg': {
    maxHeight: size(7),
    width: '100%',
    height: '100%'
  }
}))(Logo)

export default LogoImg
