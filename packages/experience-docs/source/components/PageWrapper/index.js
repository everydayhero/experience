import {comp} from '@everydayhero/stranger'

const PageWrapper = comp(({
  traits: {
    size,
    media
  }
}) => ({
  [media.md]: {
    paddingLeft: '14rem'
  }
}))('div')

export default PageWrapper
