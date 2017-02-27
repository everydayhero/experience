import {comp} from '@edh/stranger'

const ContentWrapper = comp(({
  traits: {
    font,
    media
  }
}) => ({
  margin: '0 auto',
  flexWrap: 'wrap',
  fontFamily: `"proxima-nova", ${font.family.ui}`,
  [media.tablet]: {
    display: 'flex',
    flexDirection: 'row-reverse'
  }
}))('div')

export default ContentWrapper
