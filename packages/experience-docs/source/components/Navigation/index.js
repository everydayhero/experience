import React from 'react'
import {Link} from 'react-router'

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

const Navigation = ({routes = NAVIGATION_CONTENT, id = 'primary'}) => (
  <nav id={`navigation-${id}`}>
    {routes.map((navItem, index) => {
      const link = (
        <Link
          key={`${id}-${index}`}
          to={navItem.route}
        >
          {navItem.title}
        </Link>
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
  </nav>
)

export default Navigation
