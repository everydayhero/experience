import {comp} from '@everydayhero/stranger'

const Prose = comp(({
  traits: {
    size,
    colors,
    type,
    radius,
    media
  }
}) => ({
  ' h1': {
    marginTop: size(6),
    marginBottom: size(5),
    lineHeight: type.leading.tightest,
    letterSpacing: type.tracking.tightest,
    fontSize: type.scale(5),
    fontWeight: type.weight.bold,
    [media.md]: {
      marginTop: size(7)
    }
  },
  ' h2': {
    lineHeight: type.leading.tightest,
    letterSpacing: type.tracking.tightest,
    marginTop: size(6),
    marginBottom: size(3),
    fontSize: type.scale(4),
    fontWeight: type.weight.bold
  },
  ' h3': {
    lineHeight: type.leading.tightest,
    letterSpacing: type.tracking.tightest,
    marginTop: size(5),
    marginBottom: size(3),
    fontSize: type.scale(2),
    fontWeight: type.weight.bold
  },
  ' h4': {
    lineHeight: type.leading.tightest,
    letterSpacing: type.tracking.tight,
    marginBottom: size(2),
    fontSize: type.scale(1),
    fontWeight: type.weight.bold
  },
  ' p': {
    lineHeight: type.leading.prose,
    marginBottom: '1.125em'
  },
  ' li': {
    lineHeight: type.leading.prose
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
    fontWeight: type.weight.bold
  },
  ' a': {
    fontWeight: type.weight.bold,
    textDecoration: 'underline',
    color: colors.theme.action
  },
  ' blockquote': {
    borderLeft: `${size(2)} solid ${colors.theme.soft}`,
    paddingLeft: size(4)
  },
  ' hr': {
    borderWidth: size(1),
    marginBottom: size(6),
    marginTop: size(6),
    color: colors.silver
  },
  'code': {
    display: 'inline-block',
    lineHeight: type.leading.tight,
    padding: `${size(1)} ${size(2)}`,
    fontFamily: type.family.code,
    backgroundColor: colors.theme.soft,
    borderRadius: radius.sm
  }
}))('div')

export default Prose
