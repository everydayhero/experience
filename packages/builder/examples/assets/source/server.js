import { createServer } from 'boiler-room-runner'
import routes from './routes'

export default ({ assets }) => (
  createServer({
    routes,
    assets
  })
)
