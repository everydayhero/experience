import {comp} from '@edh/stranger'

const ContentWrapper = comp(({
  traits: {
    measure,
    size
  }
}) => ({
  flex: 1,
  maxWidth: measure.wide,
  marginBottom: size(5)
}))('div')

export default ContentWrapper
