import React from 'react'
import routes from './routes'
import { createClient } from 'boiler-room-runner'
import { render } from 'react-dom'
import 'minimal.css'

if (typeof Promise === 'undefined') {
  require('es6-promise').polyfill()
}

const basepath = process.env.BASE_PATH
const App = createClient({ basepath, routes })

render(<App />, document.getElementById('mount'))
