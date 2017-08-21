var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function Dot (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'c', d: 'M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4' }), [])])
}
