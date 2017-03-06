import React from 'react'

import PageWrapper from '../PageWrapper'
import Navigation from '../Navigation'
import Content from '../Content'
import ContentWrapper from '../ContentWrapper'
import FeedbackLink from '../FeedbackLink'

import content from '../../content'

const App = ({
  children,
  location
}) => (
  <PageWrapper>
    <ContentWrapper>
      <Content activeRoute={location.pathname}>{children}</Content>
      <FeedbackLink />
    </ContentWrapper>
    <Navigation routes={content} activeRoute={location.pathname} />
  </PageWrapper>
)

export default App
