var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function Minus (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M5.2,19.8q10.8.4,21.5,0A3.6,3.6,0,0,0,30,16h0a3.6,3.6,0,0,0-3.2-3.8q-10.8-.4-21.5,0A3.6,3.6,0,0,0,2,16H2A3.6,3.6,0,0,0,5.2,19.8Z' }), [])])
}
