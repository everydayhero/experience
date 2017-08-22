
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineChevronDown = function InlineChevronDown (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M14,24.36a14.71,14.71,0,0,1-1.25-1.13,102.52,102.52,0,0,1-7.95-8,3.63,3.63,0,0,1,.42-5,3.62,3.62,0,0,1,5-.42c3,2.83,3.92,3.64,5.08,4.83a1,1,0,0,0,1.43,0c1.16-1.19,2-2,5.08-4.83a3.62,3.62,0,0,1,5,.42,3.63,3.63,0,0,1,.42,5,102.53,102.53,0,0,1-7.95,8A14.73,14.73,0,0,1,18,24.36,3.08,3.08,0,0,1,16,25,3.09,3.09,0,0,1,14,24.36Z', fill: 'currentColor' }), [])])
    }

    exports.ChevronDown = function ChevronDown (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M14,24.36a14.71,14.71,0,0,1-1.25-1.13,102.52,102.52,0,0,1-7.95-8,3.63,3.63,0,0,1,.42-5,3.62,3.62,0,0,1,5-.42c3,2.83,3.92,3.64,5.08,4.83a1,1,0,0,0,1.43,0c1.16-1.19,2-2,5.08-4.83a3.62,3.62,0,0,1,5,.42,3.63,3.63,0,0,1,.42,5,102.53,102.53,0,0,1-7.95,8A14.73,14.73,0,0,1,18,24.36,3.08,3.08,0,0,1,16,25,3.09,3.09,0,0,1,14,24.36Z', fill: 'currentColor' }), [])])
    }
  