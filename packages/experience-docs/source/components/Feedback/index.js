import React from 'react'
import Prose from '../Prose'
import FeedbackButton from '../FeedbackButton'
import {comp} from '@everydayhero/stranger'

const FeedbackContainer = comp(({
  traits: {
    size
  }
}) => ({
  marginBottom: size(5)
}))('div')

const FeedbackProse = comp(({
  traits: {
    size,
    font
  }
}) => ({
  ' h2': {
    fontSize: font.scale(2),
    marginBottom: size(4)
  },
  ' ul': {
    marginBottom: size(5)
  }
}))(Prose)

const Feedback = ({ props }) => {
  return (
    <FeedbackContainer>
      <FeedbackProse>
        <hr />
        <h2>We love feedback</h2>
        <ul>
          <li>Does the current content help you?</li>
          <li>How could it better help you?</li>
          <li>What are some challenges you regularly face, that you think the Experience System could help with?</li>
          <li>Do you disagree with any of the current content? How do you think it could be improved?</li>
        </ul>
      </FeedbackProse>
      <FeedbackButton />
    </FeedbackContainer>
  )
}

export default Feedback
