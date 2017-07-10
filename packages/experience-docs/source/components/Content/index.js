import React from 'react'
import {comp} from '@everydayhero/stranger'
import Prose from '../Prose'

const StyledContent = comp(({
  traits: {
    size,
    color,
    font,
    leading,
    measure,
    media
  }
}) => ({
  flex: '1',
  maxWidth: measure.wide,
  minWidth: measure.minimum,
  marginBottom: size(5)
}))('div')

const Content = ({
  children,
  title
}) => {
  return (
    <StyledContent>
      <Prose>
        <h1>{title}</h1>
        {children}
      </Prose>
    </StyledContent>
  )
}

export default Content
