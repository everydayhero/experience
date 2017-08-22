
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineWalking = function InlineWalking (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M23.6,14.3H20.5c-.6-.1-1.3-1.2-1.8-1.6a7.5,7.5,0,0,0-1.5-1.4c-2.2-1.2-4.6.3-6.4,1.4L9,13.8c-1.2.9-1.4,2.6-1.7,4s-.6,2.2-.1,3a1.3,1.3,0,0,0,2,.3c.5-.5.6-1.4.8-2a15.5,15.5,0,0,1,.8-2.4l.2-.2.4-.2h.1c-.3,1.6-.4,3.3-.6,5s-2,7.2-2,8.6a1.3,1.3,0,0,0,2.4.5c.7-1.2,3.2-7.3,3.2-7.6s.6-.7.8-.1c2.5,5.2,1.6,8.5,3.8,8.3s1-4.7-.5-9.8a32.7,32.7,0,0,1-1-4.9c0-.1.1-.3.4,0a4.4,4.4,0,0,0,3.2.9,12.3,12.3,0,0,0,3.2-.6C25.6,16,24.8,14.4,23.6,14.3Z' }), []), React.createElement('circle', transform('circle', { key: 2, className: 'h', cx: '16', cy: '5', r: '4' }), [])])
    }

    exports.Walking = function Walking (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M23.6,14.3H20.5c-.6-.1-1.3-1.2-1.8-1.6a7.5,7.5,0,0,0-1.5-1.4c-2.2-1.2-4.6.3-6.4,1.4L9,13.8c-1.2.9-1.4,2.6-1.7,4s-.6,2.2-.1,3a1.3,1.3,0,0,0,2,.3c.5-.5.6-1.4.8-2a15.5,15.5,0,0,1,.8-2.4l.2-.2.4-.2h.1c-.3,1.6-.4,3.3-.6,5s-2,7.2-2,8.6a1.3,1.3,0,0,0,2.4.5c.7-1.2,3.2-7.3,3.2-7.6s.6-.7.8-.1c2.5,5.2,1.6,8.5,3.8,8.3s1-4.7-.5-9.8a32.7,32.7,0,0,1-1-4.9c0-.1.1-.3.4,0a4.4,4.4,0,0,0,3.2.9,12.3,12.3,0,0,0,3.2-.6C25.6,16,24.8,14.4,23.6,14.3Z' }), []), React.createElement('circle', transform('circle', { key: 2, className: 'h', cx: '16', cy: '5', r: '4' }), [])])
    }
  