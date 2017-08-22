
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineLock = function InlineLock (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M28,16.11a1.84,1.84,0,0,0-1.75-1.72l-1.71,0V10.52a8.52,8.52,0,1,0-17,0v3.84l-1.72,0A1.84,1.84,0,0,0,4,16.11a93.39,93.39,0,0,0,0,12,1.84,1.84,0,0,0,1.75,1.72c6.21.29,14.26.29,20.47,0A1.84,1.84,0,0,0,28,28.06,93.39,93.39,0,0,0,28,16.11Zm-9.55,7.2a2.43,2.43,0,0,1-4.87,0V19.65a2.43,2.43,0,0,1,4.87,0Zm1.22-9.09q-3.65-.07-7.3,0v-3.7a3.65,3.65,0,0,1,7.3,0Z', fill: 'currentColor' }), [])])
    }

    exports.Lock = function Lock (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M28,16.11a1.84,1.84,0,0,0-1.75-1.72l-1.71,0V10.52a8.52,8.52,0,1,0-17,0v3.84l-1.72,0A1.84,1.84,0,0,0,4,16.11a93.39,93.39,0,0,0,0,12,1.84,1.84,0,0,0,1.75,1.72c6.21.29,14.26.29,20.47,0A1.84,1.84,0,0,0,28,28.06,93.39,93.39,0,0,0,28,16.11Zm-9.55,7.2a2.43,2.43,0,0,1-4.87,0V19.65a2.43,2.43,0,0,1,4.87,0Zm1.22-9.09q-3.65-.07-7.3,0v-3.7a3.65,3.65,0,0,1,7.3,0Z', fill: 'currentColor' }), [])])
    }
  