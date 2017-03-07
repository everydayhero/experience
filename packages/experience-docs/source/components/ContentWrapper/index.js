import {comp} from '@edh/stranger'

const ContentWrapper = comp(({
  traits: {
    measure,
    media,
    size
  }
}) => ({
  flex: 1,
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  paddingTop: size(5),
  paddingLeft: size(5),
  paddingRight: size(5),
  paddingBottom: size(5),
  [media.xl]: {
    paddingLeft: size(6),
    paddingRight: size(6)
  }
}))('div')

export default ContentWrapper
