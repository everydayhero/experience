
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCircleCheckmark = function InlineCircleCheckmark (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'a', d: 'M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,6A10,10,0,1,0,26,16,10,10,0,0,0,16,6Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'a', d: 'M22.4,11.1a1.6,1.6,0,0,0-2.3-.2l-6,6-2.3-2.2a1.6,1.6,0,0,0-2.3.2,1.7,1.7,0,0,0-.2,2.4,38.4,38.4,0,0,0,3.1,3.2l.7.7a1.4,1.4,0,0,0,1.9,0l.7-.7c2.2-2.1,4.7-4.7,6.8-7A1.7,1.7,0,0,0,22.4,11.1Z' }), [])])
    }

    exports.CircleCheckmark = function CircleCheckmark (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'a', d: 'M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,6A10,10,0,1,0,26,16,10,10,0,0,0,16,6Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'a', d: 'M22.4,11.1a1.6,1.6,0,0,0-2.3-.2l-6,6-2.3-2.2a1.6,1.6,0,0,0-2.3.2,1.7,1.7,0,0,0-.2,2.4,38.4,38.4,0,0,0,3.1,3.2l.7.7a1.4,1.4,0,0,0,1.9,0l.7-.7c2.2-2.1,4.7-4.7,6.8-7A1.7,1.7,0,0,0,22.4,11.1Z' }), [])])
    }
  