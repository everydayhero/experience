import React from 'react'
import {Route, IndexRoute} from 'react-router'

import { flatContent } from '../content'
import App from '../components/App'

export default (
  <Route path='/' component={App}>
    {flatContent.map((route, i) => {
      const path = route.attributes && route.attributes.path
        ? route.attributes.path
        : '/'
      return (path === '/')
      ? (<IndexRoute component={route.component} key={i} />)
      : (<Route path={route.attributes.path} component={route.component} key={i} />)
    })}
  </Route>
)
