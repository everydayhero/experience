import {comp} from '@edh/stranger'

const PageWrapper = comp(({
  traits: {
    font
  }
}) => ({
  fontFamily: font.family.ui,
  '@media screen and (min-width: 420px)': {
    display: 'flex',
    flexDirection: 'row-reverse'
  }
}))('div')

export default PageWrapper
