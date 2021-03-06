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
    title: 'Ellipses',
    src: require('./images/ellipses.svg')
  },
  {
    title: 'Ellipses Partial',
    src: require('./images/ellipses-partial.svg')
  },
  {
    title: 'Facebook',
    src: require('./images/facebook.svg')
  },
  {
    title: 'Twitter',
    src: require('./images/twitter.svg')
  },
  {
    title: 'Lock',
    src: require('./images/lock.svg')
  },
  {
    title: 'Mastercard',
    src: require('./images/mastercard.svg')
  },
  {
    title: 'American Express',
    src: require('./images/american-express.svg')
  },
  {
    title: 'Visa',
    src: require('./images/visa.svg')
  },
  {
    title: 'Credit Card',
    src: require('./images/credit-card.svg')
  },
  {
    title: 'Credit Card Number',
    src: require('./images/credit-card-number.svg')
  },
  {
    title: 'Credit Card Expiry',
    src: require('./images/credit-card-expiry.svg')
  },
  {
    title: 'Credit Card CVV3',
    src: require('./images/credit-card-cvv3.svg')
  },
  {
    title: 'Credit Card CVV4',
    src: require('./images/credit-card-cvv4.svg')
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
    colors,
    size,
    radius
  }
}) => ({
  padding: `${size(3)} ${size(4)}`,
  backgroundColor: colors.theme.soft,
  borderRadius: radius.md
}))('div')

const IconCaption = comp(({
  traits: {
    size,
    type
  }
}) => ({
  marginTop: size(3),
  fontSize: type.scale(-1),
  fontWeight: type.weight.bold,
  textAlign: 'center'
}))('div')
