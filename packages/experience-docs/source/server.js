import { createServer } from 'boiler-room-runner'
import routes from './routes'
import renderDocument from './lib/renderDocument/'

const basepath = process.env.BASE_PATH

export default ({ assets }) => {
  const app = createServer({
    basepath,
    routes,
    renderDocument,
    assets
  })

  app.staticRoutes = [
    '/'
  ]

  return app
}

export { default as renderDocument } from './lib/renderDocument/'
