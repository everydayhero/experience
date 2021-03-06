
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineWalking = function InlineWalking (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M23.6,14.32c-1-.05-2.1.06-3.14-.05-.64-.07-1.33-1.15-1.77-1.59a7.54,7.54,0,0,0-1.54-1.37c-2.19-1.19-4.55.28-6.37,1.38A20.56,20.56,0,0,0,9,13.81c-1.21.92-1.42,2.64-1.67,4-.15.83-.58,2.19-.07,3a1.29,1.29,0,0,0,2,.27c.5-.47.57-1.4.75-2a15.47,15.47,0,0,1,.83-2.4.69.69,0,0,1,.22-.25,1,1,0,0,1,.42-.17c.06,0,.13,0,.12.1-.29,1.62-.43,3.3-.56,5-.17,2.23-2,7.19-2,8.58a1.3,1.3,0,0,0,2.41.49c.69-1.2,3.18-7.33,3.24-7.56.15-.58.58-.66.85-.09,2.46,5.18,1.64,8.45,3.83,8.29s1-4.73-.54-9.82a32.65,32.65,0,0,1-1-4.94c0-.09.1-.28.4,0a4.41,4.41,0,0,0,3.2.92,12.32,12.32,0,0,0,3.17-.64C25.56,16,24.83,14.38,23.6,14.32Z', fill: 'currentColor' }), []), React.createElement('circle', transform('circle', { key: 2, cx: '16', cy: '5', r: '4', fill: 'currentColor' }), [])])
    }

    exports.Walking = function Walking (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M23.6,14.32c-1-.05-2.1.06-3.14-.05-.64-.07-1.33-1.15-1.77-1.59a7.54,7.54,0,0,0-1.54-1.37c-2.19-1.19-4.55.28-6.37,1.38A20.56,20.56,0,0,0,9,13.81c-1.21.92-1.42,2.64-1.67,4-.15.83-.58,2.19-.07,3a1.29,1.29,0,0,0,2,.27c.5-.47.57-1.4.75-2a15.47,15.47,0,0,1,.83-2.4.69.69,0,0,1,.22-.25,1,1,0,0,1,.42-.17c.06,0,.13,0,.12.1-.29,1.62-.43,3.3-.56,5-.17,2.23-2,7.19-2,8.58a1.3,1.3,0,0,0,2.41.49c.69-1.2,3.18-7.33,3.24-7.56.15-.58.58-.66.85-.09,2.46,5.18,1.64,8.45,3.83,8.29s1-4.73-.54-9.82a32.65,32.65,0,0,1-1-4.94c0-.09.1-.28.4,0a4.41,4.41,0,0,0,3.2.92,12.32,12.32,0,0,0,3.17-.64C25.56,16,24.83,14.38,23.6,14.32Z', fill: 'currentColor' }), []), React.createElement('circle', transform('circle', { key: 2, cx: '16', cy: '5', r: '4', fill: 'currentColor' }), [])])
    }
  