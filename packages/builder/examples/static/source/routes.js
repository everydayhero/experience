import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from './Root'
import Home from './Home'
import About from './About'

export default (
  <Route path='/' component={Root}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
  </Route>
)
