import '@everydayhero/react-markdown-loader/node_modules/prismjs/themes/prism.css'
import {comp} from '@everydayhero/stranger'

const Prose = comp(({
  traits: {
    size,
    color,
    font,
    leading,
    measure,
    media,
    radius
  }
}) => ({
  ' h1': {
    marginTop: size(6),
    marginBottom: size(5),
    lineHeight: leading.display,
    fontSize: font.scale(5),
    fontWeight: font.weight.bold,
    [media.md]: {
      marginTop: size(7)
    }
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
  ' li': {
    lineHeight: leading.prose
  },
  ' ul': {
    paddingLeft: size(4),
    marginBottom: '1.125em'
  },
  ' ul ul': {
    paddingLeft: size(3),
    [media.md]: {
      paddingLeft: size(4)
    }
  },
  ' ul li': {
    listStyle: 'disc'
  },
  ' ol': {
    paddingLeft: size(4),
    marginBottom: '1.125em',
    [media.md]: {
      paddingLeft: 0
    }
  },
  ' ol ol': {
    paddingLeft: size(3),
    [media.md]: {
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
  },
  ' code': {
    display: 'block',
    background: color.bg.light,
    marginTop: size(4),
    padding: size(3),
    borderRadius: radius(3),
    [media.md]: {
      padding: size(4)
    }
  }
}))('div')

export default Prose
