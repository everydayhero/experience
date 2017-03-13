import React from 'react'
import find from 'lodash/find'
import trimEnd from 'lodash/trimEnd'

import PageWrapper from '../PageWrapper'
import Navigation from '../Navigation'
import Content from '../Content'
import Header from '../Header'
import ContentWrapper from '../ContentWrapper'
import Feedback from '../Feedback'

import content, { flatContent } from '../../content'

const App = ({
  children,
  location: {
    pathname = ''
  }
}) => {
  const currentPage = find(flatContent, (route) =>
    route.attributes &&
    trimEnd(route.attributes.path, '/') === trimEnd(pathname, '/'))
  const status = currentPage && currentPage.attributes
    ? currentPage.attributes.status
    : 'red'
  const title = currentPage && currentPage.attributes
    ? currentPage.attributes.title : 'Missing Title'
  return (
    <PageWrapper>
      <ContentWrapper>
        <Header status={status} />
        <Content title={title}>
          {children}
        </Content>
        <Feedback title={title} />
      </ContentWrapper>
      <Navigation routes={content} activeRoute={pathname} />
    </PageWrapper>
  )
}

export default App
