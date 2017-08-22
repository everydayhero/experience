
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineChevronRight = function InlineChevronRight (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M24.4,14l-1.1-1.2a102.5,102.5,0,0,0-8-7.9,3.6,3.6,0,0,0-5,.4,3.6,3.6,0,0,0-.4,5l4.8,5.1a1,1,0,0,1,0,1.4L9.8,21.8a3.6,3.6,0,0,0,.4,5,3.6,3.6,0,0,0,5,.4,102.5,102.5,0,0,0,8-7.9L24.4,18a3.1,3.1,0,0,0,.6-2A3.1,3.1,0,0,0,24.4,14Z' }), [])])
    }

    exports.ChevronRight = function ChevronRight (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M24.4,14l-1.1-1.2a102.5,102.5,0,0,0-8-7.9,3.6,3.6,0,0,0-5,.4,3.6,3.6,0,0,0-.4,5l4.8,5.1a1,1,0,0,1,0,1.4L9.8,21.8a3.6,3.6,0,0,0,.4,5,3.6,3.6,0,0,0,5,.4,102.5,102.5,0,0,0,8-7.9L24.4,18a3.1,3.1,0,0,0,.6-2A3.1,3.1,0,0,0,24.4,14Z' }), [])])
    }
  