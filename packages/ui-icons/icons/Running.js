var React = require('react')
var defaultTransform = function (name, props) {
  return props
}

module.exports = function Running (props) {
  var transform = props.transform || defaultTransform
  return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('circle', transform('circle', { key: 1, className: 'h', cx: '22', cy: '5', r: '4' }), []), React.createElement('path', transform('path', { key: 2, className: 'h', d: 'M29.4,10.1a1.6,1.6,0,0,0-1.6,0l-.7.3-1.4.5a10.2,10.2,0,0,1-6.6-.6l-1.2-.7-1.7-.9c-2.6-1-6.4-1.2-9.1.7-.5.4-1.3.9-1.3,1.7a1.4,1.4,0,0,0,.5,1.1,1.4,1.4,0,0,0,1.2.3c1.4-.3,5.2-1.2,6.5-.2a1.1,1.1,0,0,1,.4,1c0,1.8,0,3.6-1.8,5.3s-6.1,1.6-8.1,1.7H3.3a1.5,1.5,0,0,0-1.2,1,1.6,1.6,0,0,0,.6,1.6,4.9,4.9,0,0,0,3,.9,30.5,30.5,0,0,0,5.9-.1l1.2-.2a7.3,7.3,0,0,1,4.4.2,11.1,11.1,0,0,1,2.4,1.6A9.4,9.4,0,0,1,21.8,28l.3.7.4.8A2.4,2.4,0,0,0,24.4,31H25a1.7,1.7,0,0,0,.7-2.2,22.1,22.1,0,0,0-5.1-8.4,2.2,2.2,0,0,1-.8-2.2,4,4,0,0,1,1.7-2.8,5.4,5.4,0,0,1,1.8-.3h1.3c3.1-.6,5.1-1.7,5.4-3A1.5,1.5,0,0,0,29.4,10.1Z' }), [])])
}
