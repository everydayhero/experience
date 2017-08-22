
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineShare = function InlineShare (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M10,10.3h2.5a1,1,0,0,1,1,1l.4,4.6A2.2,2.2,0,0,0,16,18h0a2.2,2.2,0,0,0,2.2-2.1l.4-4.6a1,1,0,0,1,1-1H22a1,1,0,0,0,.8-1.7c-1.9-2.3-4-4.2-6-6.3a1,1,0,0,0-1.4,0c-2,2.1-4.2,4.1-6,6.3A1,1,0,0,0,10,10.3Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'h', d: 'M27.8,15.3A1.4,1.4,0,0,0,26.4,14H23.5A1.6,1.6,0,0,0,22,15.6c.1,2.5,0,4.8-.1,7.3a.9.9,0,0,1-.7.9H10.8a.9.9,0,0,1-.7-.9c-.1-2.5-.1-4.9-.1-7.3A1.6,1.6,0,0,0,8.5,14H5.6a1.4,1.4,0,0,0-1.5,1.3,128.2,128.2,0,0,0,0,13.1,1.5,1.5,0,0,0,1.4,1.4L16,30l10.4-.2a1.5,1.5,0,0,0,1.4-1.4A128.2,128.2,0,0,0,27.8,15.3Z' }), [])])
    }

    exports.Share = function Share (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M10,10.3h2.5a1,1,0,0,1,1,1l.4,4.6A2.2,2.2,0,0,0,16,18h0a2.2,2.2,0,0,0,2.2-2.1l.4-4.6a1,1,0,0,1,1-1H22a1,1,0,0,0,.8-1.7c-1.9-2.3-4-4.2-6-6.3a1,1,0,0,0-1.4,0c-2,2.1-4.2,4.1-6,6.3A1,1,0,0,0,10,10.3Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'h', d: 'M27.8,15.3A1.4,1.4,0,0,0,26.4,14H23.5A1.6,1.6,0,0,0,22,15.6c.1,2.5,0,4.8-.1,7.3a.9.9,0,0,1-.7.9H10.8a.9.9,0,0,1-.7-.9c-.1-2.5-.1-4.9-.1-7.3A1.6,1.6,0,0,0,8.5,14H5.6a1.4,1.4,0,0,0-1.5,1.3,128.2,128.2,0,0,0,0,13.1,1.5,1.5,0,0,0,1.4,1.4L16,30l10.4-.2a1.5,1.5,0,0,0,1.4-1.4A128.2,128.2,0,0,0,27.8,15.3Z' }), [])])
    }
  