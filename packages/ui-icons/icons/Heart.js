
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineHeart = function InlineHeart (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M27.89,6.43A8,8,0,0,0,21.35,4,7.85,7.85,0,0,0,16,6.77,8,8,0,0,0,9.53,4,8,8,0,0,0,3,7.92c-2.81,5,.94,11.15,5.39,15.29a32.2,32.2,0,0,0,4,3.14,15.4,15.4,0,0,0,2.34,1.35A3.22,3.22,0,0,0,16,28a3.63,3.63,0,0,0,1.59-.4,23,23,0,0,0,4.2-2.78,26.6,26.6,0,0,0,3.71-3.53C27.85,18.53,32.84,11.57,27.89,6.43Z', fill: 'currentColor' }), [])])
    }

    exports.Heart = function Heart (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M27.89,6.43A8,8,0,0,0,21.35,4,7.85,7.85,0,0,0,16,6.77,8,8,0,0,0,9.53,4,8,8,0,0,0,3,7.92c-2.81,5,.94,11.15,5.39,15.29a32.2,32.2,0,0,0,4,3.14,15.4,15.4,0,0,0,2.34,1.35A3.22,3.22,0,0,0,16,28a3.63,3.63,0,0,0,1.59-.4,23,23,0,0,0,4.2-2.78,26.6,26.6,0,0,0,3.71-3.53C27.85,18.53,32.84,11.57,27.89,6.43Z', fill: 'currentColor' }), [])])
    }
  