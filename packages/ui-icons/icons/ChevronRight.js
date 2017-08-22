
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineChevronRight = function InlineChevronRight (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M24.36,14a14.71,14.71,0,0,0-1.13-1.25,102.52,102.52,0,0,0-8-7.95,3.63,3.63,0,0,0-5,.42,3.62,3.62,0,0,0-.42,5c2.83,3,3.64,3.92,4.83,5.08a1,1,0,0,1,0,1.43c-1.19,1.16-2,2-4.83,5.08a3.62,3.62,0,0,0,.42,5,3.63,3.63,0,0,0,5,.42,102.53,102.53,0,0,0,8-7.95A14.73,14.73,0,0,0,24.36,18,3.08,3.08,0,0,0,25,16,3.09,3.09,0,0,0,24.36,14Z', fill: 'currentColor' }), [])])
    }

    exports.ChevronRight = function ChevronRight (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M24.36,14a14.71,14.71,0,0,0-1.13-1.25,102.52,102.52,0,0,0-8-7.95,3.63,3.63,0,0,0-5,.42,3.62,3.62,0,0,0-.42,5c2.83,3,3.64,3.92,4.83,5.08a1,1,0,0,1,0,1.43c-1.19,1.16-2,2-4.83,5.08a3.62,3.62,0,0,0,.42,5,3.63,3.63,0,0,0,5,.42,102.53,102.53,0,0,0,8-7.95A14.73,14.73,0,0,0,24.36,18,3.08,3.08,0,0,0,25,16,3.09,3.09,0,0,0,24.36,14Z', fill: 'currentColor' }), [])])
    }
  