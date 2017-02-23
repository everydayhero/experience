import {resolve} from 'path'
import React from 'react'
import {Link} from 'react-router'
import {comp} from '@edh/stranger'

const NAVIGATION_CONTENT = [
  {route: '/', title: 'Home'},
  {route: '/principles', title: 'Principles'},
  {route: '/logo', title: 'Logo'},
  {route: '/colors', title: 'Colours'},
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
      const link = (
        <StyledNavigationLink
          key={`${id}-${index}`}
          to={navItem.route}
          active={activeRoute && navItem.route === resolve(activeRoute)}
        >
          {navItem.title}
        </StyledNavigationLink>
      )
      if (navItem.routes) {
        return <div key={`${id}-${index}`}>
          {link}

          <Navigation
            routes={navItem.routes}
            id={navItem.title.toLowerCase().replace(' ', '')}
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
    size,
    color
  }
}) => ({
}))('nav')

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
  display: 'block',
  padding: size(2),
  fontSize: font.scale(0),
  lineHeight: leading.ui,
  color: active ? color.lightest : color.dark,
  background: active ? color.highlight : color.lightest,
  borderRadius: radius(3)
}))(Link, {removeProps: ['active'], cancelPassStyles: true})

