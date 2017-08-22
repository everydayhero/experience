
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCheckmark = function InlineCheckmark (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'a', d: 'M29.8,5.3a3.5,3.5,0,0,0-4.9-.4c-4,3.9-8.9,9-12.8,13.1L7.2,13.1a3.5,3.5,0,0,0-4.9.4,3.9,3.9,0,0,0-.4,5.1,83.2,83.2,0,0,0,6.6,7L10,27.2a3,3,0,0,0,4.1,0l1.6-1.6C20.3,21,25.8,15.3,30.2,10.4A3.9,3.9,0,0,0,29.8,5.3Z' }), [])])
    }

    exports.Checkmark = function Checkmark (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'a', d: 'M29.8,5.3a3.5,3.5,0,0,0-4.9-.4c-4,3.9-8.9,9-12.8,13.1L7.2,13.1a3.5,3.5,0,0,0-4.9.4,3.9,3.9,0,0,0-.4,5.1,83.2,83.2,0,0,0,6.6,7L10,27.2a3,3,0,0,0,4.1,0l1.6-1.6C20.3,21,25.8,15.3,30.2,10.4A3.9,3.9,0,0,0,29.8,5.3Z' }), [])])
    }
  