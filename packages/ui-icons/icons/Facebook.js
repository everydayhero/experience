
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineFacebook = function InlineFacebook (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M27.56,3H4.44A1.43,1.43,0,0,0,3,4.44V27.56A1.43,1.43,0,0,0,4.44,29H16.89V19.82H13.5V15.89h3.39V13c0-3.36,2.05-5.19,5-5.19A27.78,27.78,0,0,1,25,8v3.51H22.88c-1.63,0-1.94.77-1.94,1.91v2.51h3.89l-.51,3.92H20.94V29h6.63A1.44,1.44,0,0,0,29,27.56V4.44A1.43,1.43,0,0,0,27.56,3Z', fill: 'currentColor' }), [])])
    }

    exports.Facebook = function Facebook (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M27.56,3H4.44A1.43,1.43,0,0,0,3,4.44V27.56A1.43,1.43,0,0,0,4.44,29H16.89V19.82H13.5V15.89h3.39V13c0-3.36,2.05-5.19,5-5.19A27.78,27.78,0,0,1,25,8v3.51H22.88c-1.63,0-1.94.77-1.94,1.91v2.51h3.89l-.51,3.92H20.94V29h6.63A1.44,1.44,0,0,0,29,27.56V4.44A1.43,1.43,0,0,0,27.56,3Z', fill: 'currentColor' }), [])])
    }
  