require('es5-shim')
const { polyfill } = require('es6-promise')
typeof Promise === 'undefined' && polyfill()

const React = require('react')
const { createHistory } = require('history')
const test = require('tape')
const sinon = require('sinon')
const { useRouterHistory } = require('react-router')

const createClientApp = require('./client')

test('createClientApp() throws an exception when routes are undefined', (t) => {
  t.plan(1)

  try {
    createClientApp({ routes: undefined })
  } catch (e) {
    t.equal(e.message, 'No routes key was found on options passed to createClientApp')
  }
})

test('createClientApp() returns a react element', (t) => {
  t.plan(1)

  const routes = {
    path: '/__testling',
    component: () => React.createElement('div')
  }
  const history = useRouterHistory(createHistory)()
  const App = createClientApp({ routes, history })

  t.ok(React.isValidElement(React.createElement(App)), 'is a valid element')
})

test('createClientApp() attaches a history listener which calls createLocals', (t) => {
  t.plan(1)

  const createLocalsSpy = sinon.spy(() => ({}))
  const history = useRouterHistory(createHistory)()
  const routes = {
    path: '/__testling',
    component: ({ children }) => children,
    indexRoute: {
      component: () => React.createElement('div')
    },
    childRoutes: [
      {
        path: 'foo',
        component: () => React.createElement('div')
      }
    ]
  }
  createClientApp({ routes, history, createLocals: createLocalsSpy })
  history.push('/__testling/foo')
  t.ok(createLocalsSpy.called, 'createLocals called')
})
