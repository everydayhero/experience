import {comp} from '@edh/stranger'

const PageWrapper = comp(({
  traits: {
    size,
    measure
  }
}) => ({
  margin: '0 auto',
  padding: `0 ${size(4)}`,
  maxWidth: measure.wide
}))('div')

export default PageWrapper
