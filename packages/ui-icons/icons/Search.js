
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineSearch = function InlineSearch (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M29.42,25.24a60.77,60.77,0,0,0-6.65-7.71,11.19,11.19,0,0,0,.93-4.68A11,11,0,0,0,12.65,2,11,11,0,0,0,2,13.28,11,11,0,0,0,13.06,24.13,10.63,10.63,0,0,0,17.61,23a60.18,60.18,0,0,0,7.81,6.48,2.89,2.89,0,0,0,3.77-.38A3,3,0,0,0,29.42,25.24ZM6.82,13.18a6,6,0,1,1,6.14,6A6.09,6.09,0,0,1,6.82,13.18Z', fill: 'currentColor' }), [])])
    }

    exports.Search = function Search (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M29.42,25.24a60.77,60.77,0,0,0-6.65-7.71,11.19,11.19,0,0,0,.93-4.68A11,11,0,0,0,12.65,2,11,11,0,0,0,2,13.28,11,11,0,0,0,13.06,24.13,10.63,10.63,0,0,0,17.61,23a60.18,60.18,0,0,0,7.81,6.48,2.89,2.89,0,0,0,3.77-.38A3,3,0,0,0,29.42,25.24ZM6.82,13.18a6,6,0,1,1,6.14,6A6.09,6.09,0,0,1,6.82,13.18Z', fill: 'currentColor' }), [])])
    }
  