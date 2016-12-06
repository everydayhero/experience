const { createStore } = require('redux')

const defaultCreateLocals = ({ params, store, query }) => ({
  state: store.getState(),
  dispatch: store.dispatch,
  params,
  query
})

const defaultStore = (state = {}) => (
  createStore((state) => state, state)
)

const ensureRoutes = (name) => {
  throw new Error(`No routes key was found on options passed to ${name}`)
}

module.exports = {
  defaultCreateLocals,
  defaultStore,
  ensureRoutes
}
