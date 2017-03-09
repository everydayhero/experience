import {resolve} from 'path'
import React from 'react'
import Helmet from 'react-helmet'
import {comp} from '@everydayhero/stranger'

import NavigationLink from '../NavigationLink'

const StyledNavigationList = comp(({
  props: {
    hide
  }
}) => ({
  display: hide && 'none'
}))('div', { removeProps: ['hide'] })

const NavigationList = ({
  routes = [],
  id = 'primary',
  activeRoute,
  child,
  hide
}) => (
  <StyledNavigationList id={`navigation-${id}`} hide={hide}>
    {routes.map((navItem, index) => {
      const active = activeRoute && navItem.attributes.path === resolve(activeRoute)
      const title = navItem.attributes.navTitle || navItem.attributes.title
      const pageTitle = navItem.attributes.pageTitle || navItem.attributes.title
      const link = (
        <NavigationLink
          key={`${id}-${index}`}
          to={navItem.attributes.path}
          status={navItem.attributes && navItem.attributes.status}
          active={active}
          child={child}
        >
          {active && <Helmet
            title={pageTitle}
            titleTemplate='%s - Everydayhero Experience System'
                     />}
          {title}
        </NavigationLink>
      )
      if (navItem.children) {
        return <div key={`${id}-${index}`}>
          {link}
          <NavigationList
            routes={navItem.children}
            id={title.toLowerCase().replace(' ', '')}
            activeRoute={activeRoute}
            hide={!activeRoute.includes(navItem.attributes.path)}
            child
          />
        </div>
      }
      return link
    })}
  </StyledNavigationList>
)

export default NavigationList
