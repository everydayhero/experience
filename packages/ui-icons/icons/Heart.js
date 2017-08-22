
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineHeart = function InlineHeart (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'c', d: 'M27.9,6.4A8,8,0,0,0,21.4,4,7.9,7.9,0,0,0,16,6.8,8,8,0,0,0,9.5,4,8,8,0,0,0,3,7.9c-2.8,5,.9,11.1,5.4,15.3a32.2,32.2,0,0,0,4,3.1,15.4,15.4,0,0,0,2.3,1.4L16,28a3.6,3.6,0,0,0,1.6-.4,23,23,0,0,0,4.2-2.8,26.6,26.6,0,0,0,3.7-3.5C27.9,18.5,32.8,11.6,27.9,6.4Z' }), [])])
    }

    exports.Heart = function Heart (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'c', d: 'M27.9,6.4A8,8,0,0,0,21.4,4,7.9,7.9,0,0,0,16,6.8,8,8,0,0,0,9.5,4,8,8,0,0,0,3,7.9c-2.8,5,.9,11.1,5.4,15.3a32.2,32.2,0,0,0,4,3.1,15.4,15.4,0,0,0,2.3,1.4L16,28a3.6,3.6,0,0,0,1.6-.4,23,23,0,0,0,4.2-2.8,26.6,26.6,0,0,0,3.7-3.5C27.9,18.5,32.8,11.6,27.9,6.4Z' }), [])])
    }
  