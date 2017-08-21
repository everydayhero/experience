var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function CircleCross (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,6A10,10,0,1,0,26,16,10,10,0,0,0,16,6Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'h', d: 'M18.5,16l2.1-2.2a1.6,1.6,0,0,0-.2-2.2,1.6,1.6,0,0,0-2.2-.2L16,13.5l-2.2-2.1a1.6,1.6,0,0,0-2.2.2,1.6,1.6,0,0,0-.2,2.2L13.5,16l-2.1,2.2a1.6,1.6,0,0,0,.2,2.2,1.6,1.6,0,0,0,2.2.2L16,18.5l2.2,2.1a1.7,1.7,0,0,0,2.4-2.4Z' }), [])])
}
