# Runner

[![Build status](https://badge.buildkite.com/35edf858022bf6c8ec20dc8a3433348f4a268d772991e2c913.svg)](https://buildkite.com/everyday-hero/boiler-room-runner-tests)

Redux for state management, Redial for data-fetching for multiple components
and React Router for responding to history state changes.

```
npm install boiler-room-runner --save
```

## In your client.js file

```
const { render } = require('react-dom')
const { createClient } = require('boiler-room-runner')

const routes = require('./my-routes')
const store = require('./my-store')

const App = createClient({
  store,
  routes
})

// Now you have a component which you can render to the DOM

render(<App />, document.getElementById('app'))
```

## In your server.js file

```
const { createServer } = require('boiler-room-runner')

const routes = require('./my-routes')
const store = require('./my-store')

const app = createServer({
  store,
  routes
})

// Now you have a function which takes a route and returns a Promise
// resolving to the rendered HTML for that route.

app.run('/foos/123').then(({ result }) => result)
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

`onRouteError(error)`

A function called in the event that React Router errored in trying to revolve a route transition.

`onRouteRedirect(redirectLocation)`

A function called in the event that React Router was redirected in the process of revolving a route transition.

### Both

`store`

A Redux store which will be passed to a `<Provider />`

`createLocals({ params, router, store })`

A function which takes the params object from React Router, along with the store instance, and returns a locals object to be used by Redial.
