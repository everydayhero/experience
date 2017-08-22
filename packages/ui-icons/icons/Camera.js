
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCamera = function InlineCamera (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M29.8,10.55A1.84,1.84,0,0,0,28,8.81c-1.12,0-2.42-.07-3.63-.1A1.45,1.45,0,0,1,23,7.64l-.31-1.1a1.84,1.84,0,0,0-1.64-1.34,54.78,54.78,0,0,0-9.58,0A1.84,1.84,0,0,0,9.87,6.55l-.3,1.08A1.45,1.45,0,0,1,8.2,8.69c-1.4,0-2.92.07-4.24.12A1.83,1.83,0,0,0,2.2,10.54,129.24,129.24,0,0,0,2.2,25,1.86,1.86,0,0,0,4,26.78c8.21.31,15.82.29,24-.06A1.87,1.87,0,0,0,29.8,25,128.76,128.76,0,0,0,29.8,10.55ZM16,23.33a5.5,5.5,0,1,1,5.52-5.46A5.49,5.49,0,0,1,16,23.33Z', fill: 'currentColor' }), [])])
    }

    exports.Camera = function Camera (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M29.8,10.55A1.84,1.84,0,0,0,28,8.81c-1.12,0-2.42-.07-3.63-.1A1.45,1.45,0,0,1,23,7.64l-.31-1.1a1.84,1.84,0,0,0-1.64-1.34,54.78,54.78,0,0,0-9.58,0A1.84,1.84,0,0,0,9.87,6.55l-.3,1.08A1.45,1.45,0,0,1,8.2,8.69c-1.4,0-2.92.07-4.24.12A1.83,1.83,0,0,0,2.2,10.54,129.24,129.24,0,0,0,2.2,25,1.86,1.86,0,0,0,4,26.78c8.21.31,15.82.29,24-.06A1.87,1.87,0,0,0,29.8,25,128.76,128.76,0,0,0,29.8,10.55ZM16,23.33a5.5,5.5,0,1,1,5.52-5.46A5.49,5.49,0,0,1,16,23.33Z', fill: 'currentColor' }), [])])
    }
  