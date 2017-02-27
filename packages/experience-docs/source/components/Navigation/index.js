import {resolve} from 'path'
import React from 'react'
import {Link} from 'react-router'
import Helmet from 'react-helmet'
import {comp} from '@edh/stranger'

import content from '../../content'

const Navigation = ({
  routes = content,
  id = 'primary',
  activeRoute,
  child
}) => (
  <StyledNavigation id={`navigation-${id}`}>
    {routes.map((navItem, index) => {
      const active = activeRoute && navItem.path === resolve(activeRoute)
      const link = (
        <NavigationLink
          key={`${id}-${index}`}
          to={navItem.path}
          active={active}
          child={child}
        >
          {active && <Helmet
            title={navItem.title}
            titleTemplate='%s - Everydayhero Experience System'
                     />}
          {navItem.title}
        </NavigationLink>
      )
      if (navItem.children) {
        return <div key={`${id}-${index}`}>
          {link}
          <Navigation
            routes={navItem.children}
            id={navItem.title.toLowerCase().replace(' ', '')}
            activeRoute={activeRoute}
            child
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
  children,
  child
}) => (
  <ActiveUnderline active={active}>
    <StyledNavigationLink to={to} active={active} child={child}>
      {children}
    </StyledNavigationLink>
  </ActiveUnderline>
)

const StyledNavigationLink = comp(({
  props: {
    active,
    child
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
  marginTop: size(2),
  marginBottom: size(2),
  marginLeft: child && size(4),
  fontSize: font.scale(0),
  lineHeight: leading.ui,
  color: active ? color.text.darker : color.text.dark,
  fontWeight: active && font.weight.bold,
  borderBottom: `${size(1)} solid ${active ? color.accent.light : 'transparent'}`
}))(Link, {removeProps: ['active', 'child'], cancelPassStyles: true})

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
