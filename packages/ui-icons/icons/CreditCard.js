
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCreditCard = function InlineCreditCard (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M30.56,7.09A1.8,1.8,0,0,0,28.9,5.48a172.55,172.55,0,0,0-25.74,0A1.8,1.8,0,0,0,1.5,7.09c-.08.83-.23,2.49-.34,3.91h29.7C30.77,9.57,30.64,7.92,30.56,7.09Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M1,14.94c0,3.19.15,7.21.41,9.91a1.81,1.81,0,0,0,1.66,1.62,173.16,173.16,0,0,0,25.78.11A1.81,1.81,0,0,0,30.54,25c.28-2.69.47-6.71.48-9.9Zm25.42,8.54q-3.46.12-6.92,0a1.31,1.31,0,0,1-1-1.44,1.31,1.31,0,0,1,1-1.43q3.46-.12,6.92,0a1.31,1.31,0,0,1,1,1.44A1.31,1.31,0,0,1,26.45,23.47Z', fill: 'currentColor' }), [])])
    }

    exports.CreditCard = function CreditCard (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M30.56,7.09A1.8,1.8,0,0,0,28.9,5.48a172.55,172.55,0,0,0-25.74,0A1.8,1.8,0,0,0,1.5,7.09c-.08.83-.23,2.49-.34,3.91h29.7C30.77,9.57,30.64,7.92,30.56,7.09Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M1,14.94c0,3.19.15,7.21.41,9.91a1.81,1.81,0,0,0,1.66,1.62,173.16,173.16,0,0,0,25.78.11A1.81,1.81,0,0,0,30.54,25c.28-2.69.47-6.71.48-9.9Zm25.42,8.54q-3.46.12-6.92,0a1.31,1.31,0,0,1-1-1.44,1.31,1.31,0,0,1,1-1.43q3.46-.12,6.92,0a1.31,1.31,0,0,1,1,1.44A1.31,1.31,0,0,1,26.45,23.47Z', fill: 'currentColor' }), [])])
    }
  