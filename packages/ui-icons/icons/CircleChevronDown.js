
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCircleChevronDown = function InlineCircleChevronDown (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,24A10,10,0,1,1,26,16,10,10,0,0,1,16,26Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M18.9,13.41c-1.51,1.41-2,1.82-2.54,2.41a.5.5,0,0,1-.72,0c-.58-.59-1-1-2.54-2.41a1.81,1.81,0,0,0-2.49.21,1.81,1.81,0,0,0-.21,2.49,51.26,51.26,0,0,0,4,4,7.36,7.36,0,0,0,.62.56,1.72,1.72,0,0,0,2,0,7.37,7.37,0,0,0,.62-.56,51.27,51.27,0,0,0,4-4,1.81,1.81,0,0,0-.21-2.49A1.81,1.81,0,0,0,18.9,13.41Z', fill: 'currentColor' }), [])])
    }

    exports.CircleChevronDown = function CircleChevronDown (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,24A10,10,0,1,1,26,16,10,10,0,0,1,16,26Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M18.9,13.41c-1.51,1.41-2,1.82-2.54,2.41a.5.5,0,0,1-.72,0c-.58-.59-1-1-2.54-2.41a1.81,1.81,0,0,0-2.49.21,1.81,1.81,0,0,0-.21,2.49,51.26,51.26,0,0,0,4,4,7.36,7.36,0,0,0,.62.56,1.72,1.72,0,0,0,2,0,7.37,7.37,0,0,0,.62-.56,51.27,51.27,0,0,0,4-4,1.81,1.81,0,0,0-.21-2.49A1.81,1.81,0,0,0,18.9,13.41Z', fill: 'currentColor' }), [])])
    }
  