import {comp} from '@edh/stranger'

const ContentWrapper = comp(({
  traits: {
    font
  }
}) => ({
  margin: '0 auto',
  flexWrap: 'wrap',
  fontFamily: `"proxima-nova", ${font.family.ui}`,
  '@media screen and (min-width: 26em)': {
    display: 'flex',
    flexDirection: 'row-reverse'
  }
}))('div')

export default ContentWrapper
