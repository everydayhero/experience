import {comp} from '@edh/stranger'

const ContentWrapper = comp(({
  traits: {
    font,
    media
  }
}) => ({
  margin: '0 auto',
  flexWrap: 'wrap',
  [media.tablet]: {
    display: 'flex',
    flexDirection: 'row-reverse'
  }
}))('div')

export default ContentWrapper
