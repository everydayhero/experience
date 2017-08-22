
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCreditCardNumber = function InlineCreditCardNumber (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M31,13c0-1.31-.28-4.61-.41-5.91A1.8,1.8,0,0,0,28.9,5.48a172.55,172.55,0,0,0-25.74,0A1.8,1.8,0,0,0,1.5,7.09C1.37,8.39,1.08,11.69,1,13a106.27,106.27,0,0,0,.42,11.9,1.81,1.81,0,0,0,1.66,1.61,173.16,173.16,0,0,0,25.78,0,1.81,1.81,0,0,0,1.66-1.62A106.73,106.73,0,0,0,31,13Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M12.46,19.57q-3.46-.14-6.92,0A1.31,1.31,0,0,0,4.5,21a1.31,1.31,0,0,0,1,1.43q3.46.14,6.92,0a1.31,1.31,0,0,0,1-1.43A1.31,1.31,0,0,0,12.46,19.57Z', fill: '#fff', opacity: '0.2' }), []), React.createElement('path', transform('path', { key: 3, d: 'M26.46,14.57c-2.31-.09-18.62-.09-20.92,0A1.31,1.31,0,0,0,4.5,16a1.31,1.31,0,0,0,1,1.43c2.31.09,18.62.09,20.92,0a1.31,1.31,0,0,0,1-1.43A1.31,1.31,0,0,0,26.46,14.57Z', fill: '#56d882' }), [])])
    }

    exports.CreditCardNumber = function CreditCardNumber (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M31,13c0-1.31-.28-4.61-.41-5.91A1.8,1.8,0,0,0,28.9,5.48a172.55,172.55,0,0,0-25.74,0A1.8,1.8,0,0,0,1.5,7.09C1.37,8.39,1.08,11.69,1,13a106.27,106.27,0,0,0,.42,11.9,1.81,1.81,0,0,0,1.66,1.61,173.16,173.16,0,0,0,25.78,0,1.81,1.81,0,0,0,1.66-1.62A106.73,106.73,0,0,0,31,13Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M12.46,19.57q-3.46-.14-6.92,0A1.31,1.31,0,0,0,4.5,21a1.31,1.31,0,0,0,1,1.43q3.46.14,6.92,0a1.31,1.31,0,0,0,1-1.43A1.31,1.31,0,0,0,12.46,19.57Z', fill: '#fff', opacity: '0.2' }), []), React.createElement('path', transform('path', { key: 3, d: 'M26.46,14.57c-2.31-.09-18.62-.09-20.92,0A1.31,1.31,0,0,0,4.5,16a1.31,1.31,0,0,0,1,1.43c2.31.09,18.62.09,20.92,0a1.31,1.31,0,0,0,1-1.43A1.31,1.31,0,0,0,26.46,14.57Z', fill: '#56d882' }), [])])
    }
  