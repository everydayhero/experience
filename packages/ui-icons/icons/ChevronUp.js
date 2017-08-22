
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineChevronUp = function InlineChevronUp (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M14,7.6,12.8,8.8a102.5,102.5,0,0,0-7.9,8,3.6,3.6,0,0,0,.4,5,3.6,3.6,0,0,0,5,.4l5.1-4.8a1,1,0,0,1,1.4,0l5.1,4.8a3.6,3.6,0,0,0,5-.4,3.6,3.6,0,0,0,.4-5,102.5,102.5,0,0,0-7.9-8L18,7.6A3.1,3.1,0,0,0,16,7,3.1,3.1,0,0,0,14,7.6Z' }), [])])
    }

    exports.ChevronUp = function ChevronUp (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M14,7.6,12.8,8.8a102.5,102.5,0,0,0-7.9,8,3.6,3.6,0,0,0,.4,5,3.6,3.6,0,0,0,5,.4l5.1-4.8a1,1,0,0,1,1.4,0l5.1,4.8a3.6,3.6,0,0,0,5-.4,3.6,3.6,0,0,0,.4-5,102.5,102.5,0,0,0-7.9-8L18,7.6A3.1,3.1,0,0,0,16,7,3.1,3.1,0,0,0,14,7.6Z' }), [])])
    }
  