
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineLinkedIn = function InlineLinkedIn (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M28.4,3.53A2,2,0,0,0,27,3H4.9a1.89,1.89,0,0,0-1.34.53A1.72,1.72,0,0,0,3,4.84V27.16a1.72,1.72,0,0,0,.56,1.31A1.89,1.89,0,0,0,4.9,29H27a2,2,0,0,0,1.37-.53,1.68,1.68,0,0,0,.6-1.31V4.84A1.68,1.68,0,0,0,28.4,3.53ZM10.68,25.18H6.88V12.75h3.8Zm-.32-14.8a2.16,2.16,0,0,1-1.59.67A2.17,2.17,0,0,1,6.52,8.79,2.29,2.29,0,0,1,8.78,6.53,2.29,2.29,0,0,1,11,8.79,2.18,2.18,0,0,1,10.36,10.38Zm14.76,14.8H21.25V19.11a12.34,12.34,0,0,0-.07-1.52,2.44,2.44,0,0,0-.53-1.13,1.62,1.62,0,0,0-1.37-.6Q17,15.86,17,19v6.15h-3.8V12.75h3.66v1.7h.07a3.71,3.71,0,0,1,3.66-2q2.68,0,3.63,1.52a8.22,8.22,0,0,1,1,4.35Z', fill: 'currentColor' }), [])])
    }

    exports.LinkedIn = function LinkedIn (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M28.4,3.53A2,2,0,0,0,27,3H4.9a1.89,1.89,0,0,0-1.34.53A1.72,1.72,0,0,0,3,4.84V27.16a1.72,1.72,0,0,0,.56,1.31A1.89,1.89,0,0,0,4.9,29H27a2,2,0,0,0,1.37-.53,1.68,1.68,0,0,0,.6-1.31V4.84A1.68,1.68,0,0,0,28.4,3.53ZM10.68,25.18H6.88V12.75h3.8Zm-.32-14.8a2.16,2.16,0,0,1-1.59.67A2.17,2.17,0,0,1,6.52,8.79,2.29,2.29,0,0,1,8.78,6.53,2.29,2.29,0,0,1,11,8.79,2.18,2.18,0,0,1,10.36,10.38Zm14.76,14.8H21.25V19.11a12.34,12.34,0,0,0-.07-1.52,2.44,2.44,0,0,0-.53-1.13,1.62,1.62,0,0,0-1.37-.6Q17,15.86,17,19v6.15h-3.8V12.75h3.66v1.7h.07a3.71,3.71,0,0,1,3.66-2q2.68,0,3.63,1.52a8.22,8.22,0,0,1,1,4.35Z', fill: 'currentColor' }), [])])
    }
  