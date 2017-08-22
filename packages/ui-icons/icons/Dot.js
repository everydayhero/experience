
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineDot = function InlineDot (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('circle', transform('circle', { key: 1, cx: '16', cy: '16', r: '12', fill: 'currentColor' }), [])])
    }

    exports.Dot = function Dot (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('circle', transform('circle', { key: 1, cx: '16', cy: '16', r: '12', fill: 'currentColor' }), [])])
    }
  