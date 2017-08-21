var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function CircleMinus (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,6A10,10,0,1,0,26,16,10,10,0,0,0,16,6Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'h', d: 'M10.6,17.9q5.4.2,10.8,0A1.8,1.8,0,0,0,23,16h0a1.8,1.8,0,0,0-1.6-1.9q-5.4-.2-10.8,0A1.8,1.8,0,0,0,9,16H9A1.8,1.8,0,0,0,10.6,17.9Z' }), [])])
}
