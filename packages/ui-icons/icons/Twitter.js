
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineTwitter = function InlineTwitter (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M10.81,27.5c10.57,0,16.35-8.85,16.35-16.52q0-.38,0-.75a11.75,11.75,0,0,0,2.87-3,11.36,11.36,0,0,1-3.3.91,5.82,5.82,0,0,0,2.53-3.21,11.45,11.45,0,0,1-3.65,1.41A5.71,5.71,0,0,0,21.39,4.5a5.78,5.78,0,0,0-5.74,5.81,5.86,5.86,0,0,0,.15,1.32A16.26,16.26,0,0,1,3.95,5.56a5.85,5.85,0,0,0,1.78,7.75,5.66,5.66,0,0,1-2.6-.73s0,0,0,.07a5.79,5.79,0,0,0,4.61,5.69,5.68,5.68,0,0,1-2.59.1,5.76,5.76,0,0,0,5.37,4A11.52,11.52,0,0,1,2,24.89a16.14,16.14,0,0,0,8.81,2.61', fill: 'currentColor' }), [])])
    }

    exports.Twitter = function Twitter (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M10.81,27.5c10.57,0,16.35-8.85,16.35-16.52q0-.38,0-.75a11.75,11.75,0,0,0,2.87-3,11.36,11.36,0,0,1-3.3.91,5.82,5.82,0,0,0,2.53-3.21,11.45,11.45,0,0,1-3.65,1.41A5.71,5.71,0,0,0,21.39,4.5a5.78,5.78,0,0,0-5.74,5.81,5.86,5.86,0,0,0,.15,1.32A16.26,16.26,0,0,1,3.95,5.56a5.85,5.85,0,0,0,1.78,7.75,5.66,5.66,0,0,1-2.6-.73s0,0,0,.07a5.79,5.79,0,0,0,4.61,5.69,5.68,5.68,0,0,1-2.59.1,5.76,5.76,0,0,0,5.37,4A11.52,11.52,0,0,1,2,24.89a16.14,16.14,0,0,0,8.81,2.61', fill: 'currentColor' }), [])])
    }
  