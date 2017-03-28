import Overview, { attributes as overviewAttr } from './overview.md'
import Principles, { attributes as principlesAttr } from './principles.md'
import Logo, { attributes as logoAttr } from './logo.md'
import Colors, { attributes as colorsAttr } from './colors.md'
import Typography, { attributes as typographyAttr } from './typography.md'
import Icons, { attributes as iconsAttr } from './icons.md'
import Illustration, { attributes as illustrationAttr } from './illustration.md'
import Photography, { attributes as photographyAttr } from './photography.md'
import Motion, { attributes as motionAttr } from './motion.md'
import Voice, { attributes as voiceAttr } from './voice.md'
import Layout, { attributes as layoutAttr } from './layout.md'
import Shape, { attributes as shapeAttr } from './shape.md'
import ComponentsSummary, { attributes as componentsSummaryAttr } from './components/index.md'
import Input, { attributes as inputAttr } from './components/input.md'
import LogoComponent, {attributes as logoComponentAttr} from './components/logo.md'

const content = [
  {
    component: Overview,
    attributes: overviewAttr
  },
  {
    component: Principles,
    attributes: principlesAttr
  },
  {
    component: Logo,
    attributes: logoAttr
  },
  {
    component: Colors,
    attributes: colorsAttr
  },
  {
    component: Typography,
    attributes: typographyAttr
  },
  {
    component: Illustration,
    attributes: illustrationAttr
  },
  {
    component: Icons,
    attributes: iconsAttr
  },
  {
    component: Photography,
    attributes: photographyAttr
  },
  {
    component: Motion,
    attributes: motionAttr
  },
  {
    component: Voice,
    attributes: voiceAttr
  },
  {
    component: Layout,
    attributes: layoutAttr
  },
  {
    component: Shape,
    attributes: shapeAttr
  },
  {
    component: ComponentsSummary,
    attributes: componentsSummaryAttr,
    children: [
      {
        component: Input,
        attributes: inputAttr
      },
      {
        component: LogoComponent,
        attributes: logoComponentAttr
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
