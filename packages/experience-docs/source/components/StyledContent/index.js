import {comp} from '@edh/stranger'

const StyledContent = comp(({
  traits: {
    size,
    colors,
    font
  }
}) => ({
  '@media screen and (min-width: 420px)': {
    flex: '0 1 auto'
  },
  ' pre': {
    display: 'none'
  }
}))('div')

export default StyledContent
