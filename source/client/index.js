const React = require('react')
const { Provider } = require('react-redux')
const { Router, browserHistory, match } = require('react-router')
const { trigger } = require('redial')

const {
  defaultCreateLocals,
  defaultStore,
  ensureRoutes
} = require('../shared')

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
  onRouteError = () => {},
  onRouteRedirect = () => {}
}) => {
  history.listen((location) => {
    match({ routes, location }, (
      error,
      redirect,
      props
    ) => {
      if (error) {
        return onRouteError(error)
      } else if (!props) {
        return onRouteError(new Error(`Not found: Route ${location.pathname} failed to match`))
      } else if (redirect) {
        return onRouteRedirect(redirect)
      }

      const { params, components, router } = props
      const locals = createLocals({ params, store, router })

      trigger('fetch', components, locals)
    })
  })

  return () => (
    React.createElement(Provider, { store },
      React.createElement(Router, { history, routes })
    )
  )
}
