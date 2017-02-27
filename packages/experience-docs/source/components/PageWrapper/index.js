import {comp} from '@edh/stranger'

const PageWrapper = comp(({
  traits: {
    size,
    measure,
    media
  }
}) => ({
  margin: '0 auto',
  padding: `0 ${size(4)}`,
  [media.tablet]: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row-reverse'
  }
}))('div')

export default PageWrapper
