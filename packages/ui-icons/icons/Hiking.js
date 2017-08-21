var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function Hiking (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M18.4,16.3a4.6,4.6,0,0,0,3.3.9,12.9,12.9,0,0,0,3.2-.6c1.1-.5.4-2.1-.9-2.2H20.8c-.7-.1-1.4-1.1-1.8-1.6a7.6,7.6,0,0,0-1.6-1.4,4.3,4.3,0,0,0-3.4-.2,1.2,1.2,0,0,0-.7.7,30.7,30.7,0,0,0-1.1,3.3,34.2,34.2,0,0,0-.9,4.1l-.2,2c-.2,2.2-2.1,7.1-2.1,8.5a1.3,1.3,0,0,0,2.5.5c.7-1.2,3.2-7.3,3.3-7.5s.6-.7.9-.1c2.5,5.1,1.7,8.4,3.9,8.2s1-4.7-.5-9.8A31.7,31.7,0,0,1,18,16.3C18,16.2,18.1,16,18.4,16.3Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'h', d: 'M9.3,19.6a35,35,0,0,1,.8-4.1,22.1,22.1,0,0,1,1.4-4.2c.3-.7-.3-.9-.6-1.1C8.6,9.1,6.3,12,5.6,16S7.8,20.1,9,19.8Z' }), []), React.createElement('circle', transform('circle', { key: 3, className: 'h', cx: '16', cy: '5', r: '4' }), []), React.createElement('path', transform('path', { key: 4, className: 'h', d: 'M26.3,24.8a20.4,20.4,0,0,0-.9-5.1,1,1,0,0,0-1.9.2,20.5,20.5,0,0,0,.1,5.2,44.5,44.5,0,0,0,.9,5.1,1,1,0,0,0,1.9-.2A44.7,44.7,0,0,0,26.3,24.8Z' }), [])])
}
