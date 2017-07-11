import {comp} from '@everydayhero/stranger'

const Lead = comp(({
  traits: {
    size,
    type
  }
}) => ({
  fontSize: type.scale(1),
  lineHeight: type.leading.prose,
  maxWidth: type.measure.normal,
  marginBottom: size(5)
}))('p')

export default Lead
