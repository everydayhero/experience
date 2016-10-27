
import test from 'ava'
import hash from 'murmurhash-js/murmurhash3_gc'
import prefix from 'inline-style-prefixer/static'
import jsdom from 'jsdom-global'
import cxsync, { cache, styleId } from '../src'

jsdom('<html></html>')

const style = {
  color: 'tomato',
  display: 'flex',
  fontSize: 32
}

test.beforeEach(() => {
  cxsync.clearCache()
})

test('does not throw', t => {
  t.notThrows(() => {
    cxsync(style)
  })
})

test('returns a classname', t => {
  const cx = cxsync(style)
  t.is(typeof cx, 'string')
})

test('returns a classname when passed multiple style objects', t => {
  const cx = cxsync(style, {background: 'red'}, {width: '100%'})
  t.is(typeof cx, 'string')
})

test('returns a consistent hashed classname', t => {
  t.plan(2)
  const hashname = hash(JSON.stringify(prefix(style)), 128)
  const cx = cxsync(style)
  const cxtwo = cxsync(style)
  t.is(cx, `cxsync-${hashname}`)
  t.is(cx, cxtwo) // Double-double checking
})

test('attaches a style tag and CSSStyleSheet', async t => {
  t.plan(1)
  cxsync.attach()
  const getTag = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const tag = document.getElementById(styleId)
        resolve(tag.tagName)
      }, 200)
    })
  }
  // Travis error with CSSStyleSheet is undefined
  // t.true(cxsync.sheet instanceof CSSStyleSheet)
  t.is(await getTag(), 'STYLE')
})

test('Adds px unit to number values', t => {
  const sx = {
    fontSize: 32
  }
  cxsync(sx)
  const rules = cxsync.rules
  t.regex(rules[0].css, /font-size:32px}$/)
})

test('handles content prop with empty string', t => {
  const sx = {
    content: ''
  }
  cxsync(sx)
  const rules = cxsync.rules
  t.regex(rules[0].css, /content:""}$/)
})

test('creates pseudoclass rules', t => {
  t.plan(2)
  const sx = {
    color: 'cyan',
    ':hover': {
      color: 'magenta'
    }
  }
  cxsync(sx)
  const rules = cxsync.rules
  t.is(rules.length, 2)
  const hoverRule = Object.keys(cache).reduce((a, b) => /:hover$/.test(b) ? cache[b] : null, null)
  t.regex(hoverRule.selector, /:hover$/)
})

// test('does not extract common declarations for pseudoclass rules', t => {
//   t.plan(3)
//   const cx = cxsync({
//     textDecoration: 'none',
//     ':hover': {
//       textDecoration: 'underline'
//     }
//   })
//   t.regex(cx, /text\-decoration\-none/)
//   t.false(/text\-decoration\-underline/.test(cx))
//   t.regex(cxsync.css, /underline/)
// })

test('creates @media rules', t => {
  t.plan(2)
  const sx = {
    color: 'cyan',
    '@media screen and (min-width:32em)': {
      color: 'magenta'
    }
  }
  cxsync(sx)
  const rules = cxsync.rules
  t.is(rules.length, 2)
  t.regex(rules[1].css, /^@media/)
})

test('keeps @media rules order', t => {
  t.plan(4)
  const sx = {
    color: 'cyan',
    '@media screen and (min-width:32em)': {
      color: 'magenta'
    },
    '@media screen and (min-width:48em)': {
      color: 'yellow'
    },
    '@media screen and (min-width:64em)': {
      color: 'black'
    }
  }
  cxsync(sx)
  const rules = cxsync.rules
  t.is(rules.length, 4)
  t.regex(rules[1].css, /32/)
  t.regex(rules[2].css, /48/)
  t.regex(rules[3].css, /64/)
})

test('creates @keyframe rules', t => {
  t.plan(2)
  cxsync({
    animationName: 'rainbow',
    animationTimingFunction: 'linear',
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    '@keyframes rainbow': {
      from: {
        color: 'cyan',
        backgroundColor: 'yellow'
      },
      '100%': {
        color: 'magenta'
      }
    }
  })
  t.regex(cxsync.css, /@keyframes rainbow { from/)
  t.false(/@keyframes.*@keyframes/.test(cxsync.css))
})

test('creates nested selectors', t => {
  t.plan(4)
  let cx
  t.notThrows(() => {
    cx = cxsync({
      color: 'blue',
      'h1': {
        fontSize: 32,
        'a': {
          color: 'inherit',
          ':hover': {
            textDecoration: 'underline'
          }
        }
      }
    })
  })
  t.false(/h1/.test(cx))
  t.regex(cxsync.css, /h1/)
  t.regex(cxsync.css, /a:hover/)
})

test('dedupes repeated styles', t => {
  const dupe = {
    color: 'cyan',
    fontSize: 32
  }

  cxsync(style)
  cxsync(dupe)
  cxsync(dupe)

  t.is(cxsync.rules.length, 2)
})

test('handles array values', t => {
  t.pass(2)
  t.notThrows(() => {
    cxsync({
      color: [ 'blue', 'var(--blue)' ]
    })
  })
  t.regex(cxsync.css, /var/)
})

// test('prefixes styles with array values', t => {
//   t.pass(3)
//   t.notThrows(() => {
//     cxsync({ display: 'flex' })
//   })
//   t.regex(cxsync.css, /\-webkit\-flex/)
//   t.regex(cxsync.css, /\-ms\-flexbox/)
// })

// test('prefixes styles (including ms) in keys', t => {
//   t.pass(3)
//   t.notThrows(() => {
//     cxsync({ alignItems: 'center' })
//   })
//   t.regex(cxsync.css, /\-webkit\-align-items/)
//   t.regex(cxsync.css, /\-ms\-flex-align/)
// })

test('ignores null values', t => {
  cxsync({
    color: 'tomato',
    padding: null
  })
  const css = cxsync.css
  t.is(css.includes('null'), false)
})

test('handles 0 values', t => {
  cxsync({
    padding: 0,
    fontFamily: 0,
    border: 0
  })
  const css = cxsync.css
  t.is(css.includes('border'), true)
})

test('should handle ::-moz-inner-focus', t => {
  cxsync({
    color: 'tomato',
    '::-moz-inner-focus': {
      border: 0,
      padding: 0
    }
  })
  const css = cxsync.css
  t.is(css.includes('-moz-inner-focus'), true)
})

