
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCalendar = function InlineCalendar (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M29.79,8.18a1.78,1.78,0,0,0-1.7-1.7c-1.41-.05-2.52-.09-3.93-.12V4.77a1.75,1.75,0,1,0-3.5,0V6.29c-1.36,0-8,0-9.33,0V4.77a1.75,1.75,0,1,0-3.5,0V6.36c-1.41,0-2.52.07-3.93.12a1.78,1.78,0,0,0-1.7,1.7c-.28,6.39-.28,12.5,0,18.89a1.78,1.78,0,0,0,1.7,1.7c3.93.15,8.16.23,12.09.23s8.16-.08,12.09-.23a1.78,1.78,0,0,0,1.7-1.7C30.07,20.68,30.07,14.57,29.79,8.18Zm-3.39,16a1.17,1.17,0,0,1-1.14,1.12c-3,.09-6.29.13-9.26.13s-6.27,0-9.26-.13A1.17,1.17,0,0,1,5.6,24.21c-.09-2.74-.12-5.49-.09-8.24a1.17,1.17,0,0,1,1.17-1.14H25.32A1.17,1.17,0,0,1,26.49,16C26.52,18.71,26.49,21.46,26.4,24.21Z', fill: 'currentColor' }), []), React.createElement('rect', transform('rect', { key: 2, x: '20', y: '19', width: '4', height: '4', rx: '1.33', ry: '1.33', fill: 'currentColor' }), [])])
    }

    exports.Calendar = function Calendar (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M29.79,8.18a1.78,1.78,0,0,0-1.7-1.7c-1.41-.05-2.52-.09-3.93-.12V4.77a1.75,1.75,0,1,0-3.5,0V6.29c-1.36,0-8,0-9.33,0V4.77a1.75,1.75,0,1,0-3.5,0V6.36c-1.41,0-2.52.07-3.93.12a1.78,1.78,0,0,0-1.7,1.7c-.28,6.39-.28,12.5,0,18.89a1.78,1.78,0,0,0,1.7,1.7c3.93.15,8.16.23,12.09.23s8.16-.08,12.09-.23a1.78,1.78,0,0,0,1.7-1.7C30.07,20.68,30.07,14.57,29.79,8.18Zm-3.39,16a1.17,1.17,0,0,1-1.14,1.12c-3,.09-6.29.13-9.26.13s-6.27,0-9.26-.13A1.17,1.17,0,0,1,5.6,24.21c-.09-2.74-.12-5.49-.09-8.24a1.17,1.17,0,0,1,1.17-1.14H25.32A1.17,1.17,0,0,1,26.49,16C26.52,18.71,26.49,21.46,26.4,24.21Z', fill: 'currentColor' }), []), React.createElement('rect', transform('rect', { key: 2, x: '20', y: '19', width: '4', height: '4', rx: '1.33', ry: '1.33', fill: 'currentColor' }), [])])
    }
  