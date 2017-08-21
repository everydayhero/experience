var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function Star (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'c', d: 'M17.7,3.1l3.1,6.5a1,1,0,0,0,.8.6l6.9,1a2,2,0,0,1,1,3.3l-5,5.1a1.1,1.1,0,0,0-.3.9l1.2,7.2a1.9,1.9,0,0,1-2.7,2l-6.2-3.4a1,1,0,0,0-.9,0L9.4,29.8a1.9,1.9,0,0,1-2.7-2l1.2-7.2a1.1,1.1,0,0,0-.3-.9l-5-5.1a2,2,0,0,1,1-3.3l6.9-1a1,1,0,0,0,.8-.6l3.1-6.5A1.8,1.8,0,0,1,17.7,3.1Z' }), [])])
}
