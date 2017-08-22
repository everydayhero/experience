
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCross = function InlineCross (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M21.55,16q2.35-2.41,4.65-4.86a3.58,3.58,0,0,0-.41-4.93,3.58,3.58,0,0,0-4.93-.41Q18.4,8.1,16,10.45,13.59,8.11,11.14,5.8a3.58,3.58,0,0,0-4.93.41,3.58,3.58,0,0,0-.41,4.93Q8.1,13.6,10.45,16,8.11,18.41,5.8,20.86a3.58,3.58,0,0,0,.41,4.93,3.58,3.58,0,0,0,4.93.41Q13.6,23.9,16,21.55q2.41,2.35,4.86,4.65a3.58,3.58,0,0,0,4.93-.41,3.58,3.58,0,0,0,.41-4.93Q23.9,18.4,21.55,16Z', fill: 'currentColor' }), [])])
    }

    exports.Cross = function Cross (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M21.55,16q2.35-2.41,4.65-4.86a3.58,3.58,0,0,0-.41-4.93,3.58,3.58,0,0,0-4.93-.41Q18.4,8.1,16,10.45,13.59,8.11,11.14,5.8a3.58,3.58,0,0,0-4.93.41,3.58,3.58,0,0,0-.41,4.93Q8.1,13.6,10.45,16,8.11,18.41,5.8,20.86a3.58,3.58,0,0,0,.41,4.93,3.58,3.58,0,0,0,4.93.41Q13.6,23.9,16,21.55q2.41,2.35,4.86,4.65a3.58,3.58,0,0,0,4.93-.41,3.58,3.58,0,0,0,.41-4.93Q23.9,18.4,21.55,16Z', fill: 'currentColor' }), [])])
    }
  