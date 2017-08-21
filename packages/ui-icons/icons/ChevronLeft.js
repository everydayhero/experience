var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function ChevronLeft (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M7.6,14l1.1-1.2a102.5,102.5,0,0,1,8-7.9,3.6,3.6,0,0,1,5,.4,3.6,3.6,0,0,1,.4,5l-4.8,5.1a1,1,0,0,0,0,1.4l4.8,5.1a3.6,3.6,0,0,1-.4,5,3.6,3.6,0,0,1-5,.4,102.5,102.5,0,0,1-8-7.9L7.6,18A3.1,3.1,0,0,1,7,16,3.1,3.1,0,0,1,7.6,14Z' }), [])])
}
