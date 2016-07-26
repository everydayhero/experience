require('es5-shim')
const { polyfill } = require('es6-promise')
typeof Promise === 'undefined' && polyfill()

const React = require('react')
const { createHistory } = require('history')
const { provideHooks } = require('redial')
const test = require('tape')
const sinon = require('sinon')
const { useRouterHistory } = require('react-router')

const createClientApp = require('./')

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

test('createClientApp() calls redial functions on initial load', (t) => {
  t.plan(1)

  const hooks = { fetch: sinon.spy(() => Promise.resolve()) }
  const App = provideHooks(hooks)(() => React.createElement('div'))
  const history = useRouterHistory(createHistory)()
  const routes = {
    path: '/__testling',
    component: App
  }
  createClientApp({ routes, history })
  t.ok(hooks.fetch.called, 'fetch called')
})

test('createClientApp() calls redial functions on history change', (t) => {
  t.plan(1)

  const hooks = { fetch: sinon.spy(() => Promise.resolve()) }
  const App = provideHooks(hooks)(() => React.createElement('div'))
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
        component: App
      }
    ]
  }
  createClientApp({ routes, history })
  history.push('/__testling/foo')
  t.ok(hooks.fetch.called, 'fetch called')
})

test('createClientApp() takes an optional createLocals function to prepare redial locals', (t) => {
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
  createLocalsSpy.reset()
  history.push('/__testling/foo')
  t.ok(createLocalsSpy.called, 'createLocals called')
})

