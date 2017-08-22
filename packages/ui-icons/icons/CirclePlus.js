
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCirclePlus = function InlineCirclePlus (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,24A10,10,0,1,1,26,16,10,10,0,0,1,16,26Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M20.62,14.36c-1,0-1.94-.05-2.92-.06,0-1,0-1.94-.06-2.92A1.55,1.55,0,0,0,16,10a1.55,1.55,0,0,0-1.64,1.38c0,1-.05,1.94-.06,2.92-1,0-1.94,0-2.92.06A1.55,1.55,0,0,0,10,16a1.55,1.55,0,0,0,1.38,1.64c1,0,1.94.05,2.92.06,0,1,0,1.94.06,2.92A1.55,1.55,0,0,0,16,22a1.55,1.55,0,0,0,1.64-1.38c0-1,.05-1.94.06-2.92,1,0,1.94,0,2.92-.06A1.55,1.55,0,0,0,22,16,1.55,1.55,0,0,0,20.62,14.36Z', fill: 'currentColor' }), [])])
    }

    exports.CirclePlus = function CirclePlus (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,24A10,10,0,1,1,26,16,10,10,0,0,1,16,26Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M20.62,14.36c-1,0-1.94-.05-2.92-.06,0-1,0-1.94-.06-2.92A1.55,1.55,0,0,0,16,10a1.55,1.55,0,0,0-1.64,1.38c0,1-.05,1.94-.06,2.92-1,0-1.94,0-2.92.06A1.55,1.55,0,0,0,10,16a1.55,1.55,0,0,0,1.38,1.64c1,0,1.94.05,2.92.06,0,1,0,1.94.06,2.92A1.55,1.55,0,0,0,16,22a1.55,1.55,0,0,0,1.64-1.38c0-1,.05-1.94.06-2.92,1,0,1.94,0,2.92-.06A1.55,1.55,0,0,0,22,16,1.55,1.55,0,0,0,20.62,14.36Z', fill: 'currentColor' }), [])])
    }
  