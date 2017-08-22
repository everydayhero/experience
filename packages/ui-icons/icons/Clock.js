
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineClock = function InlineClock (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,6A10,10,0,1,0,26,16,10,10,0,0,0,16,6Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M18.47,10.78C18.37,9.79,18.07,9,17,9s-1.38.79-1.47,1.78c-.36,3.9-.24,2.12-.47,5.61A30.42,30.42,0,0,0,12.19,18c-.82.49-1.45,1-1.08,2.06s1.16,1,2.09.85a39.42,39.42,0,0,0,3.88-.9A2.83,2.83,0,0,0,19,17.12C18.7,12.9,18.91,15,18.47,10.78Z', fill: 'currentColor' }), [])])
    }

    exports.Clock = function Clock (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,6A10,10,0,1,0,26,16,10,10,0,0,0,16,6Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M18.47,10.78C18.37,9.79,18.07,9,17,9s-1.38.79-1.47,1.78c-.36,3.9-.24,2.12-.47,5.61A30.42,30.42,0,0,0,12.19,18c-.82.49-1.45,1-1.08,2.06s1.16,1,2.09.85a39.42,39.42,0,0,0,3.88-.9A2.83,2.83,0,0,0,19,17.12C18.7,12.9,18.91,15,18.47,10.78Z', fill: 'currentColor' }), [])])
    }
  