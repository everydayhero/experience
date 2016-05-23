const Document = require('./layouts/Document')
const DocumentTitle = require('react-document-title')
const React = require('react')
const { Provider } = require('react-redux')
const { RouterContext, match } = require('react-router')
const { renderToString, renderToStaticMarkup } = require('react-dom/server')
const { trigger } = require('redial')

const {
  defaultCreateLocals,
  defaultStore,
  ensureRoutes
} = require('./shared')

const defaultRenderApp = (props, store) => (
  renderToString(
    React.createElement(
      Provider, { store },
      React.createElement(
        RouterContext, props
      )
    )
  )
)

const defaultRenderDocument = (content, { getState = () => ({}) }) => (
  '<!DOCTYPE html>' + renderToStaticMarkup(
    React.createElement(
      Document, {
        title: DocumentTitle.rewind(),
        state: getState(),
        content
      }
    )
  )
)

// ServerAppDefinition {
//   store = ReduxStore,
//   routes = ReactRouterRoutes,
//   renderDocument = HTML -> ReduxStore -> HTML,
//   renderApp = RenderProps -> ReduxStore -> HTML,
//   createLocals = Params -> ReduxStore -> Locals,
// }

// createServerApp :: ServerAppDefinition -> (Route -> Promise (HTML))

module.exports = ({
  store = defaultStore(),
  routes = ensureRoutes('createServerApp'),
  renderDocument = defaultRenderDocument,
  renderApp = defaultRenderApp,
  createLocals = defaultCreateLocals
}) => (route) => (
  new Promise((resolve, reject) => {
    match({ routes, location: route }, (
      error,
      redirect,
      props = {}
    ) => {
      if (error) return reject({ error, redirect })

      const { components, params } = props
      const locals = createLocals(params, store)

      trigger('fetch', components, locals).then((res) => {
        const content = renderApp(props, store)
        const document = renderDocument(content, store)
        resolve(document)
      }).catch((error) => {
        reject({ error, redirect })
      })
    })
  })
)
