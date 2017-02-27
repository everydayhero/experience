import Home from './home.md'
import Principles from './principles.md'
import Logo from './logo.md'
import Colors from './colors.md'
import Typography from './typography.md'
import Icons from './icons.md'
import Illustration from './illustration.md'
import Photography from './photography.md'
import Motion from './motion.md'
import Voice from './voice.md'
import Layout from './layout.md'
import Shape from './shape.md'
import ComponentsSummary from './components/index.md'
import Input from './components/input.md'

const content = [
  {
    path: '/',
    title: 'Overview',
    component: Home
  },
  {
    path: '/principles',
    title: 'Principles',
    component: Principles
  },
  {
    path: '/logo',
    title: 'Logo',
    component: Logo
  },
  {
    path: '/colors',
    title: 'Colors',
    component: Colors
  },
  {
    path: '/typography',
    title: 'Typography',
    component: Typography
  },
  {
    path: '/illustration',
    title: 'Illustration',
    component: Illustration
  },
  {
    path: '/icons',
    title: 'Icons',
    component: Icons
  },
  {
    path: '/photography',
    title: 'Photography',
    component: Photography
  },
  {
    path: '/motion',
    title: 'Motion',
    component: Motion
  },
  {
    path: '/voice',
    title: 'Voice & Tone',
    component: Voice
  },
  {
    path: '/layout',
    title: 'Layout',
    component: Layout
  },
  {
    path: '/shape',
    title: 'Shape',
    component: Shape
  },
  {
    path: '/components',
    title: 'Components',
    component: ComponentsSummary,
    children: [
      {
        path: '/components/input',
        title: 'Input',
        component: Input
      }
    ]
  }
]

const flattenContent = (acc, routes) => {
  if (routes.children) {
    const childRoutes = routes.children.reduce(flattenContent, [])
    return acc.concat([routes, ...childRoutes])
  }
  return acc.concat([routes])
}

export const flatContent = content.reduce(flattenContent, [])

export default content
