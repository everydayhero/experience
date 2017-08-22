
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineStar = function InlineStar (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M17.66,3.08l3.09,6.53a1,1,0,0,0,.75.57l6.9,1a2,2,0,0,1,1,3.3l-5,5.09a1.07,1.07,0,0,0-.29.92l1.18,7.19a1.88,1.88,0,0,1-2.7,2l-6.16-3.38a1,1,0,0,0-.93,0L9.36,29.77a1.87,1.87,0,0,1-2.69-2l1.18-7.2a1.07,1.07,0,0,0-.29-.92l-5-5.09a2,2,0,0,1,1-3.31l6.89-1a1,1,0,0,0,.75-.57l3.09-6.53A1.82,1.82,0,0,1,17.66,3.08Z', fill: 'currentColor' }), [])])
    }

    exports.Star = function Star (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M17.66,3.08l3.09,6.53a1,1,0,0,0,.75.57l6.9,1a2,2,0,0,1,1,3.3l-5,5.09a1.07,1.07,0,0,0-.29.92l1.18,7.19a1.88,1.88,0,0,1-2.7,2l-6.16-3.38a1,1,0,0,0-.93,0L9.36,29.77a1.87,1.87,0,0,1-2.69-2l1.18-7.2a1.07,1.07,0,0,0-.29-.92l-5-5.09a2,2,0,0,1,1-3.31l6.89-1a1,1,0,0,0,.75-.57l3.09-6.53A1.82,1.82,0,0,1,17.66,3.08Z', fill: 'currentColor' }), [])])
    }
  