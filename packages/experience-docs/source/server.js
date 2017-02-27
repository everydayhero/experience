import { createServer } from 'boiler-room-runner'
import routes from './routes'
import renderDocument from './lib/renderDocument/'
import { flatContent } from './content'

const basepath = process.env.BASE_PATH

export default ({ assets }) => {
  const app = createServer({
    basepath,
    routes,
    renderDocument,
    assets
  })

  app.staticRoutes = flatContent.map((route) => route.path)

  return app
}

export { default as renderDocument } from './lib/renderDocument/'
