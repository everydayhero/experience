const React = require('react')
const { Provider } = require('react-redux')
const { Router, browserHistory, match } = require('react-router')
const { trigger } = require('redial')

const {
  defaultCreateLocals,
  defaultStore,
  ensureRoutes
} = require('./shared')

const run = ({
  location,
  routes,
  store,
  createLocals,
  onRouteError,
  onRouteRedirect
}) => (
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

    const { params, components } = props
    const locals = createLocals(params, store)

    trigger('fetch', components, locals)
  })
)

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
  const initialLocation = global.location

  run({
    store,
    routes,
    location: initialLocation,
    createLocals,
    onRouteError,
    onRouteRedirect
  })

  history.listen((location) => {
    run({
      store,
      routes,
      location,
      createLocals,
      onRouteError,
      onRouteRedirect
    })
  })

  return () => (
    React.createElement(Provider, { store },
      React.createElement(Router, { history, routes })
    )
  )
}
