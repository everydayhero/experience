
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineSearch = function InlineSearch (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'a', d: 'M29.4,25.2a60.8,60.8,0,0,0-6.6-7.7,11.2,11.2,0,0,0,.9-4.7A11,11,0,0,0,12.6,2,11,11,0,0,0,2,13.3,11,11,0,0,0,13.1,24.1,10.6,10.6,0,0,0,17.6,23a60.2,60.2,0,0,0,7.8,6.5,2.9,2.9,0,0,0,3.8-.4A3,3,0,0,0,29.4,25.2ZM6.8,13.2a6,6,0,1,1,6.1,6A6.1,6.1,0,0,1,6.8,13.2Z' }), [])])
    }

    exports.Search = function Search (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'a', d: 'M29.4,25.2a60.8,60.8,0,0,0-6.6-7.7,11.2,11.2,0,0,0,.9-4.7A11,11,0,0,0,12.6,2,11,11,0,0,0,2,13.3,11,11,0,0,0,13.1,24.1,10.6,10.6,0,0,0,17.6,23a60.2,60.2,0,0,0,7.8,6.5,2.9,2.9,0,0,0,3.8-.4A3,3,0,0,0,29.4,25.2ZM6.8,13.2a6,6,0,1,1,6.1,6A6.1,6.1,0,0,1,6.8,13.2Z' }), [])])
    }
  