import {comp} from '@edh/stranger'

const PageWrapper = comp(({
  traits: {
    font
  }
}) => ({
  fontFamily: `"proxima-nova", ${font.family.ui}`,
  '@media screen and (min-width: 36em)': {
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'row-reverse'
  }
}))('div')

export default PageWrapper
