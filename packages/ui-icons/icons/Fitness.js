var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function Fitness (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M7.3,16.9H8.8c.6,0,.7-.3.9-.7s1.7-6.2,2-6.8,1.7-1.4,2.4.2,1.4,3.6,2.1,5.3l.2.6a1.1,1.1,0,0,0,1.9.2c.1-.1.9-1.3,1.5-1.4s2.2,1.9,2.4,2.2.3.5.7.5l4.8.2a1.1,1.1,0,0,0,1-.5c1.6-3.1,2.5-6.9-.6-10.1A8.2,8.2,0,0,0,21.4,4,8.1,8.1,0,0,0,16.7,6a1.1,1.1,0,0,1-1.4,0A8.1,8.1,0,0,0,9.5,4,8,8,0,0,0,3,7.8c-1.5,2.7-1.1,5.7.4,8.5a1.1,1.1,0,0,0,1,.6Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'h', d: 'M19,16h0S19,15.9,19,16Z' }), []), React.createElement('path', transform('path', { key: 3, className: 'h', d: 'M13.8,10h0Z' }), []), React.createElement('path', transform('path', { key: 4, className: 'h', d: 'M21.9,19.3a1.1,1.1,0,0,1-.7-.2l-.8-.8a.3.3,0,0,0-.5.1l-2,3.8a1.5,1.5,0,0,1-1.7.6,1.6,1.6,0,0,1-1-.7,64.5,64.5,0,0,1-2.2-6.5c-.2-.7-.8-.6-1,0s-1,3-1.2,3.4a1.2,1.2,0,0,1-1,.4H5.4a.4.4,0,0,0-.3.6,26.4,26.4,0,0,0,3.1,3.4,32.6,32.6,0,0,0,4,3.1,15.8,15.8,0,0,0,2.4,1.3L16,28a3.8,3.8,0,0,0,1.6-.4,23.4,23.4,0,0,0,4.3-2.7,26.7,26.7,0,0,0,3.8-3.5l1.3-1.6a.4.4,0,0,0-.3-.6Z' }), [])])
}