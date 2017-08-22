
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCheckmark = function InlineCheckmark (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M29.78,5.27a3.49,3.49,0,0,0-4.94-.43c-4,3.92-8.95,9-12.77,13.12-.63-.68-2-2-4.92-4.87a3.49,3.49,0,0,0-4.94.43,3.85,3.85,0,0,0-.41,5.14,83.16,83.16,0,0,0,6.61,7L10,27.18a3,3,0,0,0,4.13,0l1.6-1.59C20.33,21,25.84,15.27,30.2,10.41A3.85,3.85,0,0,0,29.78,5.27Z', fill: 'currentColor' }), [])])
    }

    exports.Checkmark = function Checkmark (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M29.78,5.27a3.49,3.49,0,0,0-4.94-.43c-4,3.92-8.95,9-12.77,13.12-.63-.68-2-2-4.92-4.87a3.49,3.49,0,0,0-4.94.43,3.85,3.85,0,0,0-.41,5.14,83.16,83.16,0,0,0,6.61,7L10,27.18a3,3,0,0,0,4.13,0l1.6-1.59C20.33,21,25.84,15.27,30.2,10.41A3.85,3.85,0,0,0,29.78,5.27Z', fill: 'currentColor' }), [])])
    }
  