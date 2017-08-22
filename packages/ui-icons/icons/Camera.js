
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCamera = function InlineCamera (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'c', d: 'M29.8,10.5A1.8,1.8,0,0,0,28,8.8H24.4A1.5,1.5,0,0,1,23,7.6l-.3-1.1a1.8,1.8,0,0,0-1.6-1.3,54.8,54.8,0,0,0-9.6,0A1.8,1.8,0,0,0,9.9,6.5L9.6,7.6A1.5,1.5,0,0,1,8.2,8.7H4a1.8,1.8,0,0,0-1.8,1.7A129.2,129.2,0,0,0,2.2,25,1.9,1.9,0,0,0,4,26.8c8.2.3,15.8.3,24-.1A1.9,1.9,0,0,0,29.8,25,128.7,128.7,0,0,0,29.8,10.5ZM16,23.3a5.5,5.5,0,1,1,5.5-5.5A5.5,5.5,0,0,1,16,23.3Z' }), [])])
    }

    exports.Camera = function Camera (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'c', d: 'M29.8,10.5A1.8,1.8,0,0,0,28,8.8H24.4A1.5,1.5,0,0,1,23,7.6l-.3-1.1a1.8,1.8,0,0,0-1.6-1.3,54.8,54.8,0,0,0-9.6,0A1.8,1.8,0,0,0,9.9,6.5L9.6,7.6A1.5,1.5,0,0,1,8.2,8.7H4a1.8,1.8,0,0,0-1.8,1.7A129.2,129.2,0,0,0,2.2,25,1.9,1.9,0,0,0,4,26.8c8.2.3,15.8.3,24-.1A1.9,1.9,0,0,0,29.8,25,128.7,128.7,0,0,0,29.8,10.5ZM16,23.3a5.5,5.5,0,1,1,5.5-5.5A5.5,5.5,0,0,1,16,23.3Z' }), [])])
    }
  