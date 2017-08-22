
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineQuestion = function InlineQuestion (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,25a2,2,0,1,1,2-2A2,2,0,0,1,16,27Zm6.94-13.52a9.06,9.06,0,0,1-3.28,4.83c-.92.81-1.41,1.27-1.59,2a1,1,0,0,1-1,.69h-2a1,1,0,0,1-1-1.12A7.19,7.19,0,0,1,17,15.31c1.14-.94,2-1.31,2-2.8S18,10,16,10a3.05,3.05,0,0,0-2.78,1.78,1,1,0,0,1-1.13.51l-2-.5a1,1,0,0,1-.67-1.38A7.1,7.1,0,0,1,16,6a6.86,6.86,0,0,1,5.74,2.46A6.29,6.29,0,0,1,22.94,13.48Z', fill: 'currentColor' }), [])])
    }

    exports.Question = function Question (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,25a2,2,0,1,1,2-2A2,2,0,0,1,16,27Zm6.94-13.52a9.06,9.06,0,0,1-3.28,4.83c-.92.81-1.41,1.27-1.59,2a1,1,0,0,1-1,.69h-2a1,1,0,0,1-1-1.12A7.19,7.19,0,0,1,17,15.31c1.14-.94,2-1.31,2-2.8S18,10,16,10a3.05,3.05,0,0,0-2.78,1.78,1,1,0,0,1-1.13.51l-2-.5a1,1,0,0,1-.67-1.38A7.1,7.1,0,0,1,16,6a6.86,6.86,0,0,1,5.74,2.46A6.29,6.29,0,0,1,22.94,13.48Z', fill: 'currentColor' }), [])])
    }
  