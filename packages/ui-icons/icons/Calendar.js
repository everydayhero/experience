
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCalendar = function InlineCalendar (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M29.8,8.2a1.8,1.8,0,0,0-1.7-1.7H24.2V4.8a1.8,1.8,0,1,0-3.5,0V6.3H11.3V4.8a1.8,1.8,0,1,0-3.5,0V6.4H3.9A1.8,1.8,0,0,0,2.2,8.2c-.3,6.4-.3,12.5,0,18.9a1.8,1.8,0,0,0,1.7,1.7L16,29l12.1-.2a1.8,1.8,0,0,0,1.7-1.7C30.1,20.7,30.1,14.6,29.8,8.2Zm-3.4,16a1.2,1.2,0,0,1-1.1,1.1H6.7a1.2,1.2,0,0,1-1.1-1.1c-.1-2.7-.1-5.5-.1-8.2a1.2,1.2,0,0,1,1.2-1.1H25.3A1.2,1.2,0,0,1,26.5,16C26.5,18.7,26.5,21.5,26.4,24.2Z' }), []), React.createElement('rect', transform('rect', { key: 2, className: 'h', x: '20', y: '19', width: '4', height: '4', rx: '1.3', ry: '1.3' }), [])])
    }

    exports.Calendar = function Calendar (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M29.8,8.2a1.8,1.8,0,0,0-1.7-1.7H24.2V4.8a1.8,1.8,0,1,0-3.5,0V6.3H11.3V4.8a1.8,1.8,0,1,0-3.5,0V6.4H3.9A1.8,1.8,0,0,0,2.2,8.2c-.3,6.4-.3,12.5,0,18.9a1.8,1.8,0,0,0,1.7,1.7L16,29l12.1-.2a1.8,1.8,0,0,0,1.7-1.7C30.1,20.7,30.1,14.6,29.8,8.2Zm-3.4,16a1.2,1.2,0,0,1-1.1,1.1H6.7a1.2,1.2,0,0,1-1.1-1.1c-.1-2.7-.1-5.5-.1-8.2a1.2,1.2,0,0,1,1.2-1.1H25.3A1.2,1.2,0,0,1,26.5,16C26.5,18.7,26.5,21.5,26.4,24.2Z' }), []), React.createElement('rect', transform('rect', { key: 2, className: 'h', x: '20', y: '19', width: '4', height: '4', rx: '1.3', ry: '1.3' }), [])])
    }
  