var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function Ellipsis (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'c', d: 'M6,13a3,3,0,1,1-3,3,3,3,0,0,1,3-3' }), []), React.createElement('path', transform('path', { key: 2, className: 'c', d: 'M26,13a3,3,0,1,1-3,3,3,3,0,0,1,3-3' }), []), React.createElement('path', transform('path', { key: 3, className: 'c', d: 'M16,13a3,3,0,1,1-3,3,3,3,0,0,1,3-3' }), [])])
}
