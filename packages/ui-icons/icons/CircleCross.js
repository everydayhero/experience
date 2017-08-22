
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCircleCross = function InlineCircleCross (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,24A10,10,0,1,1,26,16,10,10,0,0,1,16,26Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M20.45,11.55a1.63,1.63,0,0,0-2.24-.19q-1.12,1-2.21,2.11-1.09-1.07-2.21-2.11a1.63,1.63,0,0,0-2.24.19,1.63,1.63,0,0,0-.19,2.24q1,1.12,2.11,2.21-1.07,1.09-2.11,2.21a1.63,1.63,0,0,0,.19,2.24,1.63,1.63,0,0,0,2.24.19q1.12-1,2.21-2.11,1.09,1.07,2.21,2.11a1.74,1.74,0,0,0,2.43-2.43q-1-1.12-2.11-2.21,1.07-1.09,2.11-2.21A1.63,1.63,0,0,0,20.45,11.55Z', fill: 'currentColor' }), [])])
    }

    exports.CircleCross = function CircleCross (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,24A10,10,0,1,1,26,16,10,10,0,0,1,16,26Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M20.45,11.55a1.63,1.63,0,0,0-2.24-.19q-1.12,1-2.21,2.11-1.09-1.07-2.21-2.11a1.63,1.63,0,0,0-2.24.19,1.63,1.63,0,0,0-.19,2.24q1,1.12,2.11,2.21-1.07,1.09-2.11,2.21a1.63,1.63,0,0,0,.19,2.24,1.63,1.63,0,0,0,2.24.19q1.12-1,2.21-2.11,1.09,1.07,2.21,2.11a1.74,1.74,0,0,0,2.43-2.43q-1-1.12-2.11-2.21,1.07-1.09,2.11-2.21A1.63,1.63,0,0,0,20.45,11.55Z', fill: 'currentColor' }), [])])
    }
  