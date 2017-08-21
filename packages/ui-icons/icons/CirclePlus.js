var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function CirclePlus (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,6A10,10,0,1,0,26,16,10,10,0,0,0,16,6Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'h', d: 'M20.6,14.4H17.7c0-1,0-1.9-.1-2.9A1.6,1.6,0,0,0,16,10a1.6,1.6,0,0,0-1.6,1.4c0,1-.1,1.9-.1,2.9H11.4A1.6,1.6,0,0,0,10,16a1.6,1.6,0,0,0,1.4,1.6h2.9c0,1,0,1.9.1,2.9A1.6,1.6,0,0,0,16,22a1.6,1.6,0,0,0,1.6-1.4c0-1,.1-1.9.1-2.9h2.9A1.6,1.6,0,0,0,22,16,1.6,1.6,0,0,0,20.6,14.4Z' }), [])])
}
