# Runner

Redux for state management, Redial for data-fetching for multiple components
and React Router for responding to history state changes.

```
npm install boiler-room-runner@everydayhero/boiler-room-runner --save
```

## In your client.js file

```
const { render } = require('react-dom')
const createClientApp = require('boiler-room-runner/client')

const routes = require('./my-routes')
const store = require('./my-store')

const App = createClientApp({
  store,
  routes
})

// Now you have a component which you can render to the DOM

render(<App />, document.getElementById('app'))
```

## In your server.js file

```
const createServerApp = require('boiler-room-runner/server')

const routes = require('./my-routes')
const store = require('./my-store')

const app = createServerApp({
  store,
  routes
})

// Now you have a function which takes a route and returns a Promise
// resolving to the rendered HTML for that route.

app.run('/foos/123').then((html) => html)
```

## Required params

The only property needed to init both the server and client apps is a React Router routes configuration. You can provide this in any form that react Router accpets.

## Optional Params

### Server

`renderDocument`

A function which will take the result of calling `renderToString` on your app, along with the store, and return the final markup.

### Client

`history`

The history object to be used by React Router. Default is the `browserHistory` singleton exposed by React Router.

`onRouteError`

A function called in the event that React Router errored in trying to revolve a route transition.

### Both

`store`

A Redux store which will be passed to a `<Provider />`

`createLocals`

A function which takes the params object from React Router, along with the store instance, and returns a locals object to be used by Redial.

