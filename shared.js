const { createStore } = require('redux')

const defaultCreateLocals = (params, _store) => (params)

const defaultStore = () => createStore((state) => state)

const ensureRoutes = (name) => {
  throw new Error(`No routes key was found on options passed to ${name}`)
}

module.exports = {
  defaultCreateLocals,
  defaultStore,
  ensureRoutes
}
