
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlinePlus = function InlinePlus (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M26.77,12.18c-2.27-.08-4.54-.12-6.8-.15,0-2.27-.07-4.54-.15-6.8A3.62,3.62,0,0,0,16,2a3.62,3.62,0,0,0-3.82,3.23C12.11,7.5,12.06,9.77,12,12c-2.27,0-4.54.07-6.8.15A3.62,3.62,0,0,0,2,16a3.62,3.62,0,0,0,3.23,3.82c2.27.08,4.54.12,6.8.15,0,2.27.07,4.54.15,6.8A3.62,3.62,0,0,0,16,30a3.62,3.62,0,0,0,3.82-3.23c.08-2.27.12-4.54.15-6.8,2.27,0,4.54-.07,6.8-.15A3.62,3.62,0,0,0,30,16,3.62,3.62,0,0,0,26.77,12.18Z', fill: 'currentColor' }), [])])
    }

    exports.Plus = function Plus (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M26.77,12.18c-2.27-.08-4.54-.12-6.8-.15,0-2.27-.07-4.54-.15-6.8A3.62,3.62,0,0,0,16,2a3.62,3.62,0,0,0-3.82,3.23C12.11,7.5,12.06,9.77,12,12c-2.27,0-4.54.07-6.8.15A3.62,3.62,0,0,0,2,16a3.62,3.62,0,0,0,3.23,3.82c2.27.08,4.54.12,6.8.15,0,2.27.07,4.54.15,6.8A3.62,3.62,0,0,0,16,30a3.62,3.62,0,0,0,3.82-3.23c.08-2.27.12-4.54.15-6.8,2.27,0,4.54-.07,6.8-.15A3.62,3.62,0,0,0,30,16,3.62,3.62,0,0,0,26.77,12.18Z', fill: 'currentColor' }), [])])
    }
  