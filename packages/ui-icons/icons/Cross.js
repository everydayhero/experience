
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCross = function InlineCross (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M21.5,16l4.7-4.9a3.6,3.6,0,0,0-.4-4.9,3.6,3.6,0,0,0-4.9-.4L16,10.5,11.1,5.8a3.6,3.6,0,0,0-4.9.4,3.6,3.6,0,0,0-.4,4.9L10.5,16,5.8,20.9a3.6,3.6,0,0,0,.4,4.9,3.6,3.6,0,0,0,4.9.4L16,21.5l4.9,4.7a3.6,3.6,0,0,0,4.9-.4,3.6,3.6,0,0,0,.4-4.9Z' }), [])])
    }

    exports.Cross = function Cross (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M21.5,16l4.7-4.9a3.6,3.6,0,0,0-.4-4.9,3.6,3.6,0,0,0-4.9-.4L16,10.5,11.1,5.8a3.6,3.6,0,0,0-4.9.4,3.6,3.6,0,0,0-.4,4.9L10.5,16,5.8,20.9a3.6,3.6,0,0,0,.4,4.9,3.6,3.6,0,0,0,4.9.4L16,21.5l4.9,4.7a3.6,3.6,0,0,0,4.9-.4,3.6,3.6,0,0,0,.4-4.9Z' }), [])])
    }
  