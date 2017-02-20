import test from 'ava'
import {StyleSheet} from '../src/sheet'
import jsdom from 'jsdom-global'
import cxsync, {sheet, reset, getCss} from '../src/'

jsdom('<html></html>')

const style = {
  color: 'tomato',
  display: 'flex',
  fontSize: 32
}

test.beforeEach(() => {
  reset()
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

test('returns a consistent micro classname', t => {
  const name = 'c-blue'
  const cx = cxsync({ color: 'blue' })
  const cxtwo = cxsync({ color: 'blue' })
  t.is(cx, name)
  t.is(cx, cxtwo) // Double-double checking
})

test('has a glamor StyleSheet instance', t => {
  t.true(sheet instanceof StyleSheet)
})

test('Adds px unit to number values', t => {
  cxsync({
    fontSize: 32
  })
  t.regex(getCss(), /font-size:32px}$/)
})

test('creates pseudoclass rules', t => {
  cxsync({
    color: 'cyan',
    ':hover': {
      color: 'magenta'
    }
  })
  t.regex(getCss(), /:hover/)
})

test('creates @media rules', t => {
  cxsync({
    color: 'cyan',
    '@media screen and (min-width:32em)': {
      color: 'magenta'
    }
  })
  t.regex(getCss(), /@media/)
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
  const rules = sheet.rules().map(rule => rule.cssText)
  t.is(rules.length, 4)
  t.regex(rules[1], /32/)
  t.regex(rules[2], /48/)
  t.regex(rules[3], /64/)
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
  t.true(/h1/.test(cx))
  t.regex(getCss(), /h1/)
  t.regex(getCss(), /a:hover/)
})

test('dedupes repeated styles', t => {
  const dupe = {
    color: 'cyan',
    fontSize: 32
  }

  cxsync(dupe)
  cxsync(dupe)

  t.is(sheet.rules().length, 2)
})

test('handles array values', t => {
  t.pass(2)
  t.notThrows(() => {
    cxsync({
      color: [ 'blue', 'var(--blue)' ]
    })
  })
  const css = getCss()
  t.is(css, '.c-blue{color:blue}.c-var--blue{color:var(--blue)}')
})

// test('handles prefixed styles with array values', t => {
//   t.pass(3)
//   t.notThrows(() => {
//     const prefixed = {
//       display: 'flex'
//     }
//     cxsync(prefixed)
//   })
//   t.regex(getCss(), /\-webkit\-flex/)
//   t.regex(getCss(), /\-ms\-flexbox/)
// })

// test('handles prefixed styles (including ms) in keys', t => {
//   t.pass(3)
//   t.notThrows(() => {
//     const prefixed = {
//       alignItems: 'center'
//     }
//     cxsync(prefixed)
//   })
//   t.regex(getCss(), /\-webkit\-align-items/)
//   t.regex(getCss(), /\-ms\-flex-align/)
// })

test('ignores null values', t => {
  cxsync({
    color: 'tomato',
    padding: null
  })
  t.is(getCss().includes('null'), false)
})

test('handles 0 values', t => {
  cxsync({
    padding: 0,
    fontFamily: 0,
    border: 0
  })
  t.is(getCss().includes('border'), true)
})

test('should handle ::-moz-inner-focus', t => {
  cxsync({
    color: 'tomato',
    '::-moz-inner-focus': {
      border: 0,
      padding: 0
    }
  })
  t.is(getCss().includes('-moz-inner-focus'), true)
})

test('can set prefix option', t => {
  cxsync.setOptions({ prefix: 'foo-' })
  const className = cxsync({ color: 'tomato' })
  t.regex(className, /^foo\-/)
})

test('className replaces !', t => {
  const className = cxsync({
    color: 'red!important'
  })
  t.is(className.includes('!'), false)
})
