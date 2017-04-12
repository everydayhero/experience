import React from 'react'
import {comp} from '@everydayhero/stranger'
import InlineSVG from 'react-svg-inline'

export const ICONS = [
  {
    title: 'Camera',
    src: require('./images/camera.svg')
  },
  {
    title: 'Clap Hands',
    src: require('./images/claphands.svg')
  },
  {
    title: 'Donation',
    src: require('./images/donation.svg')
  },
  {
    title: 'Earth',
    src: require('./images/earth.svg')
  },
  {
    title: 'Duck',
    src: require('./images/duck.svg')
  },
  {
    title: 'Penguin',
    src: require('./images/penguin.svg')
  },
  {
    title: 'Open Book',
    src: require('./images/openbook.svg')
  },
  {
    title: 'Question',
    src: require('./images/question.svg')
  },
  {
    title: 'Search',
    src: require('./images/search.svg')
  },
  {
    title: 'Star',
    src: require('./images/star.svg')
  },
  {
    title: 'Heart',
    src: require('./images/heart.svg')
  },
  {
    title: 'Share',
    src: require('./images/share.svg')
  },
  {
    title: 'Check',
    src: require('./images/check.svg')
  },
  {
    title: 'Cross',
    src: require('./images/cross.svg')
  },
  {
    title: 'Plus',
    src: require('./images/plus.svg')
  },
  {
    title: 'Minus',
    src: require('./images/minus.svg')
  },
  {
    title: 'Left',
    src: require('./images/left-chevron.svg')
  },
  {
    title: 'Right',
    src: require('./images/right-chevron.svg')
  },
  {
    title: 'Facebook',
    src: require('./images/facebook.svg')
  },
  {
    title: 'Twitter',
    src: require('./images/twitter.svg')
  }
]

const IconList = () => (
  <IconListContainer>
    {ICONS.map(({title, src}, index) => (
      <IconWrapper key={index}>
        <Background>
          <Icon svg={src} title={title} alt={title} />
          <IconCaption>
            {title}
          </IconCaption>
        </Background>
      </IconWrapper>
    ))}
  </IconListContainer>
)

export default IconList

// Styled components
const IconListContainer = comp(({
  traits: {
    size
  }
}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  marginBottom: size(4),
  marginLeft: `-${size(3)}`,
  marginRight: `-${size(3)}`
}))('div')

const Icon = comp({
  display: 'block',
  width: '100%',
  ' svg': {
    width: '100%',
    height: '100%'
  }
})(InlineSVG)

const IconWrapper = comp(({
  traits: {
    color,
    size
  }
}) => ({
  flex: '0',
  flexBasis: '33%',
  paddingLeft: size(3),
  paddingRight: size(3),
  marginBottom: size(4),
  '@media screen and (min-device-width: 500px)': {
    flexBasis: '25%'
  }
}))('div')

const Background = comp(({
  traits: {
    color,
    size,
    radius
  }
}) => ({
  padding: `${size(3)} ${size(4)}`,
  backgroundColor: color.bg.light,
  borderRadius: radius(3)
}))('div')

const IconCaption = comp(({
  traits: {
    size,
    color,
    font
  }
}) => ({
  marginTop: size(3),
  fontSize: font.scale(-1),
  fontWeight: font.weight.bold,
  textAlign: 'center'
}))('div')
