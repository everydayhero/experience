
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineComment = function InlineComment (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M29.61,8.36a6.44,6.44,0,0,0-5.12-4.92,82.52,82.52,0,0,0-17,0A6.44,6.44,0,0,0,2.39,8.36a40.18,40.18,0,0,0,0,11.22A6.44,6.44,0,0,0,7.51,24.5c.81.08,1.62.13,2.43.19V30a1,1,0,0,0,1.72.73l6-5.95c2.28,0,4.55-.16,6.82-.39a6.28,6.28,0,0,0,5.12-4.78A40.18,40.18,0,0,0,29.61,8.36Z', fill: 'currentColor' }), [])])
    }

    exports.Comment = function Comment (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M29.61,8.36a6.44,6.44,0,0,0-5.12-4.92,82.52,82.52,0,0,0-17,0A6.44,6.44,0,0,0,2.39,8.36a40.18,40.18,0,0,0,0,11.22A6.44,6.44,0,0,0,7.51,24.5c.81.08,1.62.13,2.43.19V30a1,1,0,0,0,1.72.73l6-5.95c2.28,0,4.55-.16,6.82-.39a6.28,6.28,0,0,0,5.12-4.78A40.18,40.18,0,0,0,29.61,8.36Z', fill: 'currentColor' }), [])])
    }
  