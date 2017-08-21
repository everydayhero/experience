var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function ChevronDown (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M14,24.4l-1.2-1.1a102.5,102.5,0,0,1-7.9-8,3.6,3.6,0,0,1,.4-5,3.6,3.6,0,0,1,5-.4l5.1,4.8a1,1,0,0,0,1.4,0l5.1-4.8a3.6,3.6,0,0,1,5,.4,3.6,3.6,0,0,1,.4,5,102.5,102.5,0,0,1-7.9,8L18,24.4a3.1,3.1,0,0,1-2,.6A3.1,3.1,0,0,1,14,24.4Z' }), [])])
}
