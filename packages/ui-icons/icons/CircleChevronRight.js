var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function CircleChevronRight (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M2,16A14,14,0,1,1,16,30,14,14,0,0,1,2,16Zm4,0A10,10,0,1,0,16,6,10,10,0,0,0,6,16Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'h', d: 'M11.3,15l.6-.6a51.3,51.3,0,0,1,4-4,1.8,1.8,0,0,1,2.5.2,1.8,1.8,0,0,1,.2,2.5l-2.4,2.5a.5.5,0,0,0,0,.7l2.4,2.5a1.9,1.9,0,0,1-2.7,2.7,51.3,51.3,0,0,1-4-4l-.6-.6a1.7,1.7,0,0,1,0-2Z' }), [])])
}
