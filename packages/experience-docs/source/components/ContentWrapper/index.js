import {comp} from '@edh/stranger'

const ContentWrapper = comp(({
  traits: {
    measure,
    size
  }
}) => ({
  flex: 1,
  overflow: 'auto',
  WebKitOverflowScrolling: 'touch',
  paddingTop: size(5),
  paddingLeft: size(5),
  paddingRight: size(5),
  paddingBottom: size(5)
}))('div')

export default ContentWrapper
