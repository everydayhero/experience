const { createElement: e } = require('react')

module.exports = ({
  title,
  content,
  state = {},
  styles = ['/main.css'],
  scripts = ['/main.js']
}) => (
  e('html', {},
    e('head', {},
      e('title', {}, title),
      e('meta', { charSet: 'utf-8' }),
      e('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      styles.map((s, i) => e('link', { rel: 'stylesheet', href: s, key: i }))
    ),
    e('body', {},
      e('main', {
        id: 'mount',
        dangerouslySetInnerHTML: {
          __html: content
        }
      }),
      e('script', {
        id: 'initial-state',
        type: 'application/json',
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(state)
        }
      }),
      scripts.map((s, i) => e('script', { src: s, key: i }))
    )
  )
)
