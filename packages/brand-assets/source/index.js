import transform from 'lodash/transform'

const buildAbsoluteResourceUrls = (resources) => (
  transform(resources, (result, resource) => {
    result['svg'][resource] = require(`./images/${resource}.svg`)
    result['png'][resource] = require(`./images/${resource}.png`)
    result['eps'][resource] = require(`./images/${resource}.eps`)
  }, {svg: {}, png: {}, eps: {}})
)

const RESOURCE_URLS = buildAbsoluteResourceUrls([
  'standard',
  'standard-padded',
  'standard-padded-markup',
  'inverted',
  'inverted-padded',
  'inverted-background',
  'inverted-padded-background',
  'mark-standard',
  'mark-standard-padded',
  'mark-standard-padded-markup',
  'mark-inverted',
  'mark-inverted-padded',
  'mark-inverted-padded-background',
  'powered-by',
  'powered-by-padded',
  'powered-by-inverted-padded',
  'powered-by-inverted-padded-background',
  'old-standard',
  'old-inverted',
  'old-mark',
  'old-mark-inverted'
])

export const logo = (name, ext = 'svg') => (
  RESOURCE_URLS[ext][name]
)

