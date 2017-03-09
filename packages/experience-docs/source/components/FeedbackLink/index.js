import React from 'react'
import {comp} from '@everydayhero/stranger'

const FEEDBACK_ADDRESS = 'q0s6p1r6a1e6g8d0@everydayhero.slack.com'

const FeedbackLink = ({
  title
}) => {
  const subject = `Feedback for the Experience System`
  const body = `I have some feedback for ${global.location}`
  return (
    <FeedbackAnchor
      href={`mailto:${FEEDBACK_ADDRESS}?subject=${subject}&body=${body}`}
    >
      <FeedbackText>Feedback?</FeedbackText>
      <MailEmoji>{'💌'}</MailEmoji>
    </FeedbackAnchor>
  )
}

export default FeedbackLink

const FeedbackAnchor = comp(({
  traits: {
    size,
    color,
    leading
  }
}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: leading.ui,
  textDecoration: 'none',
  color: color.cta.medium
}))('a')

const FeedbackText = comp({
  textDecoration: 'underline'
})('span')

const MailEmoji = comp(({
  traits: {
    size
  }
}) => ({
  marginLeft: size(2)
}))('span')
