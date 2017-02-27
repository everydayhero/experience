import React from 'react'
import {Route, IndexRoute} from 'react-router'

import PageWrapper from '../components/PageWrapper'
import ContentWrapper from '../components/ContentWrapper'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import StyledContent from '../components/StyledContent'
import FeedbackLink from '../components/FeedbackLink'

import Home from '../content/home.md'
import Principles from '../content/principles.md'
import Logo from '../content/logo.md'
import Colors from '../content/colors.md'
import Typography from '../content/typography.md'
import Icons from '../content/icons.md'
import Illustration from '../content/illustration.md'
import Photography from '../content/photography.md'
import Motion from '../content/motion.md'
import Voice from '../content/voice.md'
import Layout from '../content/layout.md'
import Shape from '../content/shape.md'
import ComponentsSummary from '../content/components.md'
import Input from '../content/components/input.md'

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
    <IndexRoute component={Home} />

    <Route path='principles' component={Principles} />
    <Route path='logo' component={Logo} />
    <Route path='colors' component={Colors} />
    <Route path='typography' component={Typography} />
    <Route path='icons' component={Icons} />
    <Route path='illustration' component={Illustration} />
    <Route path='photography' component={Photography} />
    <Route path='motion' component={Motion} />
    <Route path='voice' component={Voice} />
    <Route path='layout' component={Layout} />
    <Route path='shape' component={Shape} />

    <Route path='components' component={ComponentsSummary}>
      <Route path='input' component={Input} />
    </Route>
  </Route>
)
