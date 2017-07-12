import {comp} from '@everydayhero/stranger'

const PageWrapper = comp(({
  traits: {
    media
  }
}) => ({
  [media.md]: {
    paddingLeft: '14rem'
  }
}))('div')

export default PageWrapper
