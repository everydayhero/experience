import {comp} from '@edh/stranger'

const Lead = comp(({
  traits: {
    measure,
    size,
    leading,
    font
  }
}) => ({
  fontSize: font.scale(1),
  lineHeight: leading.prose,
  maxWidth: measure.normal,
  marginBottom: size(5)
}))('p')

export default Lead
