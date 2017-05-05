import React from 'react'
import {comp} from '@everydayhero/stranger'
import {
  createShadow
} from '@everydayhero/rug/dist/utils'
import Icon from '../Icon'

const FEEDBACK_ADDRESS = 'x8w2j6j9d8g8f5z1@blackbaud.slack.com'

const FeedbackButton = ({
  title
}) => {
  const subject = `Feedback for the Experience System`
  const body = `I have some feedback for ${title}`
  return (
    <StyledButton
      href={`mailto:${FEEDBACK_ADDRESS}?subject=${subject}&body=${body}`}
    >
      <FeedbackIcon name='heart' kind='emoji' /> I have feedback
    </StyledButton>
  )
}

export default FeedbackButton

const FeedbackIcon = comp(({
  traits: {
    size
  }
}) => ({
  marginRight: size(3)
}))(Icon)

const StyledButton = comp(({
  traits: {
    size,
    color,
    leading,
    font,
    radius,
    shadow
  }
}) => ({
  display: 'inline-flex',
  padding: `${size(3, 'em')} ${size(4, 'em')}`,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: font.scale(1),
  fontWeight: font.weight.bold,
  textDecoration: 'none',
  borderRadius: radius(5),
  backgroundColor: color.bg.lighter,
  transition: 'all .2s ease-in-out',
  boxShadow: [shadow[2],
    [createShadow([
      ['inset', 0, `-${size(4, 'em')}`, size(3, 'em'), 0.03],
      ['inset', 0, '-1px', 0, 0.05]
    ])]
  ].join(','),
  ':hover': {
    boxShadow: [shadow[3],
      [createShadow([
        ['inset', 0, `-${size(3, 'em')}`, size(3, 'em'), 0.03],
        ['inset', 0, '-1px', 0, 0.05]
      ])]
    ].join(',')
  },
  ':active': {
    boxShadow: [shadow[1],
      [createShadow([
        ['inset', 0, `-${size(4, 'em')}`, size(3, 'em'), 0.03],
        ['inset', 0, '-1px', 0, 0.05]
      ])]
    ].join(',')
  }
}))('a')
