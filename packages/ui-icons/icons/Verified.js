
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineVerified = function InlineVerified (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M30.15,6.84a2.53,2.53,0,0,0-3.46-.29c-2.82,2.61-6.26,6-8.94,8.75-.44-.45-1.39-1.34-3.44-3.24a2.53,2.53,0,0,0-3.46.29,2.48,2.48,0,0,0-.29,3.43,56.7,56.7,0,0,0,4.62,4.66l1.09,1a2.18,2.18,0,0,0,2.89,0l1.12-1.06c3.24-3,7.09-6.88,10.14-10.12A2.48,2.48,0,0,0,30.15,6.84Z', fill: '#56d882' }), []), React.createElement('path', transform('path', { key: 2, d: 'M25.32,19.57a10,10,0,0,1-10.56,6.35,10.71,10.71,0,0,1-8.7-8.76A10,10,0,0,1,16,6a9.87,9.87,0,0,1,4.9,1.3,1,1,0,0,0,1.17-.17l1.48-1.43a1,1,0,0,0-.16-1.58A14,14,0,1,0,30,16c0-.73-.51-.85-.88-.48-1.11,1.1-2.22,2.24-3.34,3.34A2,2,0,0,0,25.32,19.57Z', fill: 'currentColor' }), [])])
    }

    exports.Verified = function Verified (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M30.15,6.84a2.53,2.53,0,0,0-3.46-.29c-2.82,2.61-6.26,6-8.94,8.75-.44-.45-1.39-1.34-3.44-3.24a2.53,2.53,0,0,0-3.46.29,2.48,2.48,0,0,0-.29,3.43,56.7,56.7,0,0,0,4.62,4.66l1.09,1a2.18,2.18,0,0,0,2.89,0l1.12-1.06c3.24-3,7.09-6.88,10.14-10.12A2.48,2.48,0,0,0,30.15,6.84Z', fill: '#56d882' }), []), React.createElement('path', transform('path', { key: 2, d: 'M25.32,19.57a10,10,0,0,1-10.56,6.35,10.71,10.71,0,0,1-8.7-8.76A10,10,0,0,1,16,6a9.87,9.87,0,0,1,4.9,1.3,1,1,0,0,0,1.17-.17l1.48-1.43a1,1,0,0,0-.16-1.58A14,14,0,1,0,30,16c0-.73-.51-.85-.88-.48-1.11,1.1-2.22,2.24-3.34,3.34A2,2,0,0,0,25.32,19.57Z', fill: 'currentColor' }), [])])
    }
  