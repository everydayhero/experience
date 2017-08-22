
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineShare = function InlineShare (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M10,10.35h2.46a1,1,0,0,1,1,1l.37,4.63A2.21,2.21,0,0,0,16,18h0a2.21,2.21,0,0,0,2.17-2.07l.37-4.63a1,1,0,0,1,1-1H22a1,1,0,0,0,.76-1.72c-1.89-2.26-4-4.19-6-6.32a1,1,0,0,0-1.43,0c-2,2.13-4.15,4.06-6,6.32A1,1,0,0,0,10,10.35Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M27.83,15.35A1.44,1.44,0,0,0,26.38,14H23.53A1.57,1.57,0,0,0,22,15.61c.06,2.45,0,4.84-.05,7.33a.89.89,0,0,1-.71.94C19.43,24,17.72,24,16,24s-3.43,0-5.21-.12a.89.89,0,0,1-.71-.94C10,20.45,10,18.06,10,15.61A1.57,1.57,0,0,0,8.47,14H5.62a1.44,1.44,0,0,0-1.45,1.35,128.21,128.21,0,0,0,0,13.11,1.46,1.46,0,0,0,1.42,1.36c3.56.13,7,.19,10.42.18s6.86-.05,10.41-.18a1.46,1.46,0,0,0,1.42-1.36A128.21,128.21,0,0,0,27.83,15.35Z', fill: 'currentColor' }), [])])
    }

    exports.Share = function Share (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { verticalAlign: '-0.18em' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, d: 'M10,10.35h2.46a1,1,0,0,1,1,1l.37,4.63A2.21,2.21,0,0,0,16,18h0a2.21,2.21,0,0,0,2.17-2.07l.37-4.63a1,1,0,0,1,1-1H22a1,1,0,0,0,.76-1.72c-1.89-2.26-4-4.19-6-6.32a1,1,0,0,0-1.43,0c-2,2.13-4.15,4.06-6,6.32A1,1,0,0,0,10,10.35Z', fill: 'currentColor' }), []), React.createElement('path', transform('path', { key: 2, d: 'M27.83,15.35A1.44,1.44,0,0,0,26.38,14H23.53A1.57,1.57,0,0,0,22,15.61c.06,2.45,0,4.84-.05,7.33a.89.89,0,0,1-.71.94C19.43,24,17.72,24,16,24s-3.43,0-5.21-.12a.89.89,0,0,1-.71-.94C10,20.45,10,18.06,10,15.61A1.57,1.57,0,0,0,8.47,14H5.62a1.44,1.44,0,0,0-1.45,1.35,128.21,128.21,0,0,0,0,13.11,1.46,1.46,0,0,0,1.42,1.36c3.56.13,7,.19,10.42.18s6.86-.05,10.41-.18a1.46,1.46,0,0,0,1.42-1.36A128.21,128.21,0,0,0,27.83,15.35Z', fill: 'currentColor' }), [])])
    }
  