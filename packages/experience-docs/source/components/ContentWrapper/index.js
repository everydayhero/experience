import {comp} from '@edh/stranger'

const ContentWrapper = comp(({
  traits: {
    measure
  }
}) => ({
  flex: 1,
  maxWidth: measure.wide
}))('div')

export default ContentWrapper
