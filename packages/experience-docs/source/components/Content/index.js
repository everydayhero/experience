import {comp} from '@edh/stranger'

const Content = comp(({
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
  marginBottom: size(5),
  ' .source': {
    display: 'none'
  },
  ' h1': {
    lineHeight: leading.display,
    marginTop: size(7),
    marginBottom: size(4),
    fontSize: font.scale(5),
    fontWeight: font.weight.bold
  },
  ' h2': {
    lineHeight: leading.display,
    marginTop: size(6),
    marginBottom: size(3),
    fontSize: font.scale(4),
    fontWeight: font.weight.bold
  },
  ' h3': {
    lineHeight: leading.display,
    marginTop: size(5),
    marginBottom: size(3),
    fontSize: font.scale(2),
    fontWeight: font.weight.bold
  },
  ' h4': {
    lineHeight: leading.display,
    marginTop: size(4),
    marginBottom: size(2),
    fontSize: font.scale(1),
    fontWeight: font.weight.bold
  },
  ' p': {
    lineHeight: leading.prose,
    marginBottom: '1.125em'
  },
  ' :last-child': {
    marginBottom: 0
  },
  ' li': {
    lineHeight: leading.prose
  },
  ' ul': {
    paddingLeft: size(4),
    marginBottom: '1.125em'
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
    marginBottom: '1.125em',
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
  },
  ' blockquote': {
    borderLeft: `${size(2)} solid ${color.border.light}`,
    paddingLeft: size(4)
  },
  ' hr': {
    borderWidth: size(1),
    marginBottom: size(6),
    marginTop: size(6),
    color: color.silver
  }
}))('div')

export default Content
