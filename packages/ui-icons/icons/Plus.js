
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlinePlus = function InlinePlus (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M26.8,12.2H20c0-2.3-.1-4.5-.1-6.8A3.6,3.6,0,0,0,16,2a3.6,3.6,0,0,0-3.8,3.2c-.1,2.3-.1,4.5-.1,6.8H5.2A3.6,3.6,0,0,0,2,16a3.6,3.6,0,0,0,3.2,3.8H12c0,2.3.1,4.5.1,6.8A3.6,3.6,0,0,0,16,30a3.6,3.6,0,0,0,3.8-3.2c.1-2.3.1-4.5.1-6.8h6.8A3.6,3.6,0,0,0,30,16,3.6,3.6,0,0,0,26.8,12.2Z' }), [])])
    }

    exports.Plus = function Plus (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M26.8,12.2H20c0-2.3-.1-4.5-.1-6.8A3.6,3.6,0,0,0,16,2a3.6,3.6,0,0,0-3.8,3.2c-.1,2.3-.1,4.5-.1,6.8H5.2A3.6,3.6,0,0,0,2,16a3.6,3.6,0,0,0,3.2,3.8H12c0,2.3.1,4.5.1,6.8A3.6,3.6,0,0,0,16,30a3.6,3.6,0,0,0,3.8-3.2c.1-2.3.1-4.5.1-6.8h6.8A3.6,3.6,0,0,0,30,16,3.6,3.6,0,0,0,26.8,12.2Z' }), [])])
    }
  