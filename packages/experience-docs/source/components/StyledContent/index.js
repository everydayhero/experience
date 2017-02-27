import React from 'react'
import {comp} from '@edh/stranger'

const Content = ({children}) => (
  <StyledContentWrapper>
    <StyledContent>
      {children}
    </StyledContent>
  </StyledContentWrapper>
)

export default Content

const StyledContentWrapper = comp({
  flex: '1'
})('div')

const StyledContent = comp(({
  traits: {
    size,
    color,
    font,
    leading,
    measure
  }
}) => ({
  padding: size(5),
  color: color.text.darker,
  maxWidth: measure.wide,
  margin: '0 auto',
  ' pre': {
    display: 'none'
  },
  ' h1': {
    marginBottom: size(4),
    fontSize: font.scale(4),
    fontWeight: font.weight.bold
  },
  ' h2': {
    margin: `${size(4)} 0 ${size(3)} 0`,
    fontSize: font.scale(2),
    fontWeight: font.weight.bold
  },
  ' h3': {
    margin: `${size(4)} 0 ${size(3)} 0`,
    fontSize: font.scale(1),
    fontWeight: font.weight.bold
  },
  ' p': {
    lineHeight: leading.prose,
    marginBottom: size(3)
  },
  ' li': {
    lineHeight: leading.prose
  },
  ' ul li': {
    listStyle: 'disc'
  },
  ' ul ul': {
    paddingLeft: size(4)
  },
  ' ol li': {
    listStyle: 'decimal'
  },
  ' ol ol': {
    paddingLeft: size(4)
  }
}))('div')

