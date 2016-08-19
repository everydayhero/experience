const { routerReducer } = require('react-router-redux')
const { createStore } = require('redux')

const defaultCreateLocals = ({ params }) => (params)

const defaultStore = () => createStore((state) => state, { routing: routerReducer() })

const ensureRoutes = (name) => {
  throw new Error(`No routes key was found on options passed to ${name}`)
}

module.exports = {
  defaultCreateLocals,
  defaultStore,
  ensureRoutes
}
