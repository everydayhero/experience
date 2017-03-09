import {comp} from '@everydayhero/stranger'

const PageWrapper = comp(({
  traits: {
    size,
    measure,
    media
  }
}) => ({
  [media.md]: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    flexDirection: 'row-reverse'
  }
}))('div')

export default PageWrapper
