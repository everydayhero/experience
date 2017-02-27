import {comp} from '@edh/stranger'

const PageWrapper = comp(({
  traits: {
    font
  }
}) => ({
  display: 'flex',
  margin: '0 auto',
  maxWidth: '50em',
  flexWrap: 'wrap',
  fontFamily: `"proxima-nova", ${font.family.ui}`,
  '@media screen and (min-width: 36em)': {
    flexDirection: 'row-reverse'
  }
}))('div')

export default PageWrapper
