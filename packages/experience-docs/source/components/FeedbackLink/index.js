import React from 'react'
import {comp} from '@edh/stranger'

const FEEDBACK_ADDRESS = 'q0s6p1r6a1e6g8d0@everydayhero.slack.com'

const FeedbackLink = ({
  title
}) => {
  const subject = `Feedback for the Experience System`
  const body = `I have some feedback for ${window.location}`
  return (
    <div>
      <FeedbackAnchor
        href={`mailto:${FEEDBACK_ADDRESS}?subject=${subject}&body=${body}`}
      >
        {'Feedback?'}
      </FeedbackAnchor>
      <MailEmoji>{'💌'}</MailEmoji>
    </div>
  )
}

export default FeedbackLink

// Styled component
const FeedbackAnchor = comp(({
  traits: {
    size,
    color,
    leading
  }
}) => ({
  display: 'inline-block',
  marginTop: size(4),
  lineHeight: leading.ui,
  textDecoration: 'underline',
  color: color.primary
}))('a')

const MailEmoji = comp(({
  traits: {
    size,
    leading
  }
}) => ({
  marginLeft: size(2),
  lineHeight: leading.ui,
  verticalAlign: 'super'
}))('span')
