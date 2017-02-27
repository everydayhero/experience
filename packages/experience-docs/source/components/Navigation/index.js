import {resolve} from 'path'
import React from 'react'
import {Link} from 'react-router'
import Helmet from 'react-helmet'
import {comp} from '@edh/stranger'

const NAVIGATION_CONTENT = [
  {route: '/', title: 'Home'},
  {route: '/principles', title: 'Principles'},
  {route: '/logo', title: 'Logo'},
  {route: '/colors', title: 'Colors'},
  {route: '/typography', title: 'Typography'},
  {route: '/icons', title: 'Icons'},
  {route: '/illustration', title: 'Illustration'},
  {route: '/photography', title: 'Photography'},
  {route: '/motion', title: 'Motion'},
  {route: '/voice', title: 'Voice & Tone'},
  {route: '/layout', title: 'Layout'},
  {route: '/shape', title: 'Shape'},
  {
    route: '/components',
    title: 'Components',
    routes: [
     {route: '/components/input', title: 'Input'}
    ]
  }
]

const Navigation = ({
  routes = NAVIGATION_CONTENT,
  id = 'primary',
  activeRoute
}) => (
  <StyledNavigation id={`navigation-${id}`}>
    {routes.map((navItem, index) => {
      const active = activeRoute && navItem.route === resolve(activeRoute)
      const link = (
        <NavigationLink
          key={`${id}-${index}`}
          to={navItem.route}
          active={active}
        >
          {active && <Helmet
            title={navItem.title}
            titleTemplate='%s - Everydayhero Experience System'
          />}
          {navItem.title}
        </NavigationLink>
      )
      if (navItem.routes) {
        return <div key={`${id}-${index}`}>
          {link}

          <Navigation
            routes={navItem.routes}
            id={navItem.title.toLowerCase().replace(' ', '')}
            activeRoute={activeRoute}
          />
        </div>
      }
      return link
    })}
  </StyledNavigation>
)

export default Navigation

const StyledNavigation = comp(({
  traits: {
    size
  }
}) => ({
  margin: `0 ${size(6)} ${size(3)} 0`
}))('nav')

const NavigationLink = ({
  to,
  active,
  children
}) => (
  <ActiveUnderline active={active}>
    <StyledNavigationLink to={to} active={active}>
      {children}
    </StyledNavigationLink>
  </ActiveUnderline>
)

const StyledNavigationLink = comp(({
  props: {
    active
  },
  traits: {
    size,
    color,
    font,
    leading,
    radius
  }
}) => ({
  display: 'inline-block',
  margin: `${size(2)} 0`,
  fontSize: font.scale(0),
  lineHeight: leading.ui,
  color: active ? color.text.darker : color.text.dark,
  fontWeight: active && font.weight.bold,
  borderBottom: `${size(1)} solid ${active ? color.accent.light : 'transparent'}`
}))(Link, {removeProps: ['active'], cancelPassStyles: true})

const ActiveUnderline = comp(({
  props: {
    active
  },
  traits: {
    size
  }
}) => ({
  display: 'block',
  marginLeft: size(1)
}))('span', {removeProps: ['active']})

