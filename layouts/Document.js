const React = require('react')

module.exports = ({
  title,
  content,
  state = {},
  stylesheets = ['./main.css'],
  scripts = ['./main.js']
}) => (
  React.createElement(
  'html',
    null,
    React.createElement(
      'head',
      null,
      React.createElement('title', null, title),
      React.createElement('meta', { charSet: 'utf-8' }),
      React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      stylesheets.map((s) => React.createElement('link', { rel: 'stylesheet', href: s }))
    ),
    React.createElement(
      'body',
      null,
      React.createElement('main', {
        id: 'mount',
        dangerouslySetInnerHTML: {
          __html: content
        }
      }),
      React.createElement('script', {
        id: 'initial-state',
        type: 'application/json',
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(state)
        }
      }),
      scripts.map((s) => React.createElement('script', { src: s }))
    )
  )
)
