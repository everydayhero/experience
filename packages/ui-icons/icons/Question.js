var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function Question (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'a', d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,25a2,2,0,1,1,2-2A2,2,0,0,1,16,27Zm6.9-13.5a9.1,9.1,0,0,1-3.3,4.8c-.9.8-1.4,1.3-1.6,2a1,1,0,0,1-1,.7h-2a1,1,0,0,1-1-1.1A7.2,7.2,0,0,1,17,15.3c1.1-.9,2-1.3,2-2.8S18,10,16,10a3.1,3.1,0,0,0-2.8,1.8,1,1,0,0,1-1.1.5l-2-.5a1,1,0,0,1-.7-1.4A7.1,7.1,0,0,1,16,6a6.9,6.9,0,0,1,5.7,2.5A6.3,6.3,0,0,1,22.9,13.5Z' }), [])])
}
