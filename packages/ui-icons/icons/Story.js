
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineStory = function InlineStory (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M7.8,20.8A37.6,37.6,0,0,1,13.8,22,.9.9,0,0,0,15,21V6.1C15,3.8,11.3,3.2,8.9,3A1.9,1.9,0,0,0,7,5.1V19.7A1,1,0,0,0,7.8,20.8Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'h', d: 'M18.1,22a37.6,37.6,0,0,1,6.1-1.2,1,1,0,0,0,.8-1V5.1A1.9,1.9,0,0,0,23.1,3c-2.4.2-6.1.8-6.1,3.1V21A.9.9,0,0,0,18.1,22Z' }), []), React.createElement('path', transform('path', { key: 3, className: 'h', d: 'M30.9,5.2c0-1.3-3.9-1.9-3.9.2V21.1a2.3,2.3,0,0,1-1.8,2c-5,.9-5.2.9-8.7,1.8H15.4c-3.5-.9-3.7-.9-8.7-1.8a2.3,2.3,0,0,1-1.8-2V5.4c0-2.1-3.9-1.5-3.9-.2S1,10.5,1,14.9,1.1,25,1.1,25s.6,1.9,1.5,2C10,28,13,29,16,29s6-1,13.4-2c.8-.1,1.5-1.3,1.5-2s.1-5.1.1-10.2S30.9,6.1,30.9,5.2Z' }), [])])
    }

    exports.Story = function Story (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M7.8,20.8A37.6,37.6,0,0,1,13.8,22,.9.9,0,0,0,15,21V6.1C15,3.8,11.3,3.2,8.9,3A1.9,1.9,0,0,0,7,5.1V19.7A1,1,0,0,0,7.8,20.8Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'h', d: 'M18.1,22a37.6,37.6,0,0,1,6.1-1.2,1,1,0,0,0,.8-1V5.1A1.9,1.9,0,0,0,23.1,3c-2.4.2-6.1.8-6.1,3.1V21A.9.9,0,0,0,18.1,22Z' }), []), React.createElement('path', transform('path', { key: 3, className: 'h', d: 'M30.9,5.2c0-1.3-3.9-1.9-3.9.2V21.1a2.3,2.3,0,0,1-1.8,2c-5,.9-5.2.9-8.7,1.8H15.4c-3.5-.9-3.7-.9-8.7-1.8a2.3,2.3,0,0,1-1.8-2V5.4c0-2.1-3.9-1.5-3.9-.2S1,10.5,1,14.9,1.1,25,1.1,25s.6,1.9,1.5,2C10,28,13,29,16,29s6-1,13.4-2c.8-.1,1.5-1.3,1.5-2s.1-5.1.1-10.2S30.9,6.1,30.9,5.2Z' }), [])])
    }
  