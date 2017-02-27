import React from 'react'
import {Route, IndexRoute} from 'react-router'

import PageWrapper from '../components/PageWrapper'
import ContentWrapper from '../components/ContentWrapper'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import StyledContent from '../components/StyledContent'
import FeedbackLink from '../components/FeedbackLink'

import { flatContent } from '../content'

const App = ({
  children,
  location
}) => (
  <PageWrapper>
    <Header />
    <ContentWrapper>
      <StyledContent>
        {children}
        <FeedbackLink />
      </StyledContent>
      <Navigation activeRoute={location.pathname} />
    </ContentWrapper>
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
