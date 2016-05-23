const React = require('react')
const { Provider } = require('react-redux')
const { Router, browserHistory, match } = require('react-router')
const { trigger } = require('redial')

const {
  defaultCreateLocals,
  defaultStore,
  ensureRoutes
} = require('./shared')

// ClientAppDefinition {
//   store = ReduxStore,
//   routes = ReactRouterRoutes,
//   history = ReactRouterHistory,
//   createLocals = ReactRouterParams -> ReduxStore -> Locals,
//   onRouteError = Error -> reactRouterRedirect -> ()
// }

// createClientApp :: ClientAppDefinition -> ClientAppElement

module.exports = ({
  store = defaultStore(),
  routes = ensureRoutes('createClientApp'),
  history = browserHistory,
  createLocals = defaultCreateLocals,
  onRouteError = () => {}
}) => {
  history.listen((location) => {
    match({ routes, location }, (
      error,
      redirect,
      { params, components }
    ) => {
      if (error) return onRouteError(error, redirect)

      const locals = createLocals(params, store)

      trigger('fetch', components, locals)
    })
  })

  return () => (
    React.createElement(Provider, { store },
      React.createElement(Router, { history, routes })
    )
  )
}
