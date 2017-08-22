
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCircleMinus = function InlineCircleMinus (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,24A10,10,0,1,1,26,16,10,10,0,0,1,16,26Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M21.39,14.09q-5.38-.18-10.77,0A1.81,1.81,0,0,0,9,16a1.81,1.81,0,0,0,1.61,1.91q5.38.18,10.77,0A1.81,1.81,0,0,0,23,16,1.81,1.81,0,0,0,21.39,14.09Z', fill: 'currentColor' }), [])])
    }

    exports.CircleMinus = function CircleMinus (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,24A10,10,0,1,1,26,16,10,10,0,0,1,16,26Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M21.39,14.09q-5.38-.18-10.77,0A1.81,1.81,0,0,0,9,16a1.81,1.81,0,0,0,1.61,1.91q5.38.18,10.77,0A1.81,1.81,0,0,0,23,16,1.81,1.81,0,0,0,21.39,14.09Z', fill: 'currentColor' }), [])])
    }
  