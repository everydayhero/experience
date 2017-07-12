import React from 'react'
import {comp} from '@everydayhero/stranger'
import Prose from '../Prose'

const StyledContent = comp(({
  traits: {
    size,
    type
  }
}) => ({
  flex: '1',
  maxWidth: type.measure.wide,
  minWidth: type.measure.minimum,
  marginBottom: size(5),
  ' .source': {
    display: 'none'
  }
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
