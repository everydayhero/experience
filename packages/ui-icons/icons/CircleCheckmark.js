
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCircleCheckmark = function InlineCircleCheckmark (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,24A10,10,0,1,1,26,16,10,10,0,0,1,16,26Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M20.13,10.88c-1.88,1.8-4.18,4.12-6,6-.29-.31-.93-.92-2.3-2.23a1.65,1.65,0,0,0-2.3.2,1.74,1.74,0,0,0-.19,2.36,38.42,38.42,0,0,0,3.08,3.21l.73.69a1.42,1.42,0,0,0,1.93,0l.75-.73c2.16-2.1,4.73-4.73,6.76-7a1.74,1.74,0,0,0-.19-2.36A1.65,1.65,0,0,0,20.13,10.88Z', fill: 'currentColor' }), [])])
    }

    exports.CircleCheckmark = function CircleCheckmark (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,24A10,10,0,1,1,26,16,10,10,0,0,1,16,26Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M20.13,10.88c-1.88,1.8-4.18,4.12-6,6-.29-.31-.93-.92-2.3-2.23a1.65,1.65,0,0,0-2.3.2,1.74,1.74,0,0,0-.19,2.36,38.42,38.42,0,0,0,3.08,3.21l.73.69a1.42,1.42,0,0,0,1.93,0l.75-.73c2.16-2.1,4.73-4.73,6.76-7a1.74,1.74,0,0,0-.19-2.36A1.65,1.65,0,0,0,20.13,10.88Z', fill: 'currentColor' }), [])])
    }
  