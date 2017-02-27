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
    measure,
    media
  }
}) => ({
  color: color.text.darker,
  maxWidth: measure.wide,
  minWidth: measure.minimum,
  marginBottom: size(5),
  ' pre': {
    display: 'none'
  },
  ' h1': {
    lineHeight: leading.display,
    marginBottom: size(4),
    fontSize: font.scale(3),
    fontWeight: font.weight.bold,
    [media.tablet]: {
      fontSize: font.scale(4)
    }
  },
  ' h2': {
    lineHeight: leading.display,
    margin: `${size(4)} 0 ${size(3)} 0`,
    fontSize: font.scale(2),
    fontWeight: font.weight.bold,
    [media.tablet]: {
      fontSize: font.scale(2)
    }
  },
  ' h3': {
    lineHeight: leading.display,
    margin: `${size(4)} 0 ${size(3)} 0`,
    fontSize: font.scale(1),
    fontWeight: font.weight.bold,
    [media.tablet]: {
      fontSize: font.scale(1)
    }
  },
  ' h4': {
    lineHeight: leading.display,
    margin: `${size(3)} 0 ${size(2)} 0`,
    fontSize: font.scale(0),
    fontWeight: font.weight.bold,
    [media.tablet]: {
      fontSize: font.scale(0)
    }
  },
  ' p': {
    lineHeight: leading.prose,
    marginBottom: size(3)
  },
  ' li': {
    lineHeight: leading.prose
  },
  ' ul': {
    paddingLeft: size(4),
    [media.tablet]: {
      paddingLeft: 0
    }
  },
  ' ul ul': {
    paddingLeft: size(3),
    [media.tablet]: {
      paddingLeft: size(4)
    }
  },
  ' ul li': {
    listStyle: 'disc'
  },
  ' ol': {
    paddingLeft: size(4),
    [media.tablet]: {
      paddingLeft: 0
    }
  },
  ' ol ol': {
    paddingLeft: size(3),
    [media.tablet]: {
      paddingLeft: size(4)
    }
  },
  ' ol li': {
    listStyle: 'decimal'
  },
  ' strong': {
    fontWeight: font.weight.bold
  },
  ' a': {
    fontWeight: font.weight.bold,
    textDecoration: 'underline',
    color: color.action.medium
  }
}))('div')

