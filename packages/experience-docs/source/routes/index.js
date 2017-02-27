import React from 'react'
import {Route, IndexRoute} from 'react-router'

import PageWrapper from '../components/PageWrapper'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Content from '../components/Content'
import ContentWrapper from '../components/ContentWrapper'
import FeedbackLink from '../components/FeedbackLink'

import { flatContent } from '../content'

const App = ({
  children,
  location
}) => (
  <PageWrapper>
    <ContentWrapper>
      <Header />
      <Content>{children}</Content>
      <FeedbackLink />
    </ContentWrapper>
    <Navigation activeRoute={location.pathname} />
  </PageWrapper>
)

export default (
  <Route path='/' component={App}>
    {flatContent.map((route, i) => (
      (route.path === '/')
      ? (<IndexRoute component={route.component} key={i} />)
      : (<Route path={route.path} component={route.component} key={i} />)
    ))}
  </Route>
)
