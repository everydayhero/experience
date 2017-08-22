
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineStory = function InlineStory (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M7.79,20.75A37.6,37.6,0,0,1,13.85,22,.93.93,0,0,0,15,21V6.06C15,3.79,11.26,3.17,8.87,3A1.91,1.91,0,0,0,7,5.08V19.72A1,1,0,0,0,7.79,20.75Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M18.15,22a37.6,37.6,0,0,1,6.06-1.2,1,1,0,0,0,.79-1V5.08A1.91,1.91,0,0,0,23.13,3C20.73,3.17,17,3.79,17,6.06V21A.93.93,0,0,0,18.15,22Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 3, d: 'M30.89,5.16C30.89,3.85,27,3.3,27,5.4v15.7a2.3,2.3,0,0,1-1.78,2c-5,.88-5.21.92-8.67,1.77a2.31,2.31,0,0,1-1.1,0c-3.46-.85-3.7-.9-8.67-1.77a2.3,2.3,0,0,1-1.78-2V5.4C5,3.3,1.11,3.85,1.11,5.16c0,.94-.11,5.3-.11,9.7C1,19.9,1.11,25,1.11,25c0,.71.64,1.87,1.47,2C10,28,13,29,16,29s6-1,13.42-2c.83-.11,1.47-1.27,1.47-2,0,0,.11-5.15.11-10.19C31,10.46,30.89,6.1,30.89,5.16Z', fill: 'currentColor' }), [])])
    }

    exports.Story = function Story (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M7.79,20.75A37.6,37.6,0,0,1,13.85,22,.93.93,0,0,0,15,21V6.06C15,3.79,11.26,3.17,8.87,3A1.91,1.91,0,0,0,7,5.08V19.72A1,1,0,0,0,7.79,20.75Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M18.15,22a37.6,37.6,0,0,1,6.06-1.2,1,1,0,0,0,.79-1V5.08A1.91,1.91,0,0,0,23.13,3C20.73,3.17,17,3.79,17,6.06V21A.93.93,0,0,0,18.15,22Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 3, d: 'M30.89,5.16C30.89,3.85,27,3.3,27,5.4v15.7a2.3,2.3,0,0,1-1.78,2c-5,.88-5.21.92-8.67,1.77a2.31,2.31,0,0,1-1.1,0c-3.46-.85-3.7-.9-8.67-1.77a2.3,2.3,0,0,1-1.78-2V5.4C5,3.3,1.11,3.85,1.11,5.16c0,.94-.11,5.3-.11,9.7C1,19.9,1.11,25,1.11,25c0,.71.64,1.87,1.47,2C10,28,13,29,16,29s6-1,13.42-2c.83-.11,1.47-1.27,1.47-2,0,0,.11-5.15.11-10.19C31,10.46,30.89,6.1,30.89,5.16Z', fill: 'currentColor' }), [])])
    }
  