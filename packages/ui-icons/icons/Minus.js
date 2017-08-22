
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineMinus = function InlineMinus (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M5.23,19.82q10.77.36,21.54,0A3.62,3.62,0,0,0,30,16h0a3.62,3.62,0,0,0-3.23-3.82q-10.77-.36-21.54,0A3.62,3.62,0,0,0,2,16H2A3.62,3.62,0,0,0,5.23,19.82Z', fill: 'currentColor' }), [])])
    }

    exports.Minus = function Minus (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M5.23,19.82q10.77.36,21.54,0A3.62,3.62,0,0,0,30,16h0a3.62,3.62,0,0,0-3.23-3.82q-10.77-.36-21.54,0A3.62,3.62,0,0,0,2,16H2A3.62,3.62,0,0,0,5.23,19.82Z', fill: 'currentColor' }), [])])
    }
  