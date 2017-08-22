
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineLocation = function InlineLocation (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,1A10,10,0,0,0,6,11c0,4.12,5.57,14.38,8.39,19.09a1.87,1.87,0,0,0,3.22,0C20.43,25.38,26,15.12,26,11A10,10,0,0,0,16,1Zm0,15a5,5,0,1,1,5-5A5,5,0,0,1,16,16Z', fill: 'currentColor' }), [])])
    }

    exports.Location = function Location (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,1A10,10,0,0,0,6,11c0,4.12,5.57,14.38,8.39,19.09a1.87,1.87,0,0,0,3.22,0C20.43,25.38,26,15.12,26,11A10,10,0,0,0,16,1Zm0,15a5,5,0,1,1,5-5A5,5,0,0,1,16,16Z', fill: 'currentColor' }), [])])
    }
  