
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineComment = function InlineComment (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M29.6,8.4a6.4,6.4,0,0,0-5.1-4.9,82.5,82.5,0,0,0-17,0A6.4,6.4,0,0,0,2.4,8.4a40.2,40.2,0,0,0,0,11.2,6.4,6.4,0,0,0,5.1,4.9l2.4.2V30a1,1,0,0,0,1.7.7l6-5.9c2.3,0,4.5-.2,6.8-.4a6.3,6.3,0,0,0,5.1-4.8A40.2,40.2,0,0,0,29.6,8.4Z' }), [])])
    }

    exports.Comment = function Comment (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M29.6,8.4a6.4,6.4,0,0,0-5.1-4.9,82.5,82.5,0,0,0-17,0A6.4,6.4,0,0,0,2.4,8.4a40.2,40.2,0,0,0,0,11.2,6.4,6.4,0,0,0,5.1,4.9l2.4.2V30a1,1,0,0,0,1.7.7l6-5.9c2.3,0,4.5-.2,6.8-.4a6.3,6.3,0,0,0,5.1-4.8A40.2,40.2,0,0,0,29.6,8.4Z' }), [])])
    }
  