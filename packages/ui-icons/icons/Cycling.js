
    var React = require('react')
    var defaultTransform = function (name, props) {
      return props
    }

    exports.InlineCycling = function InlineCycling (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M7,19a6,6,0,1,0,6,6A6,6,0,0,0,7,19Zm0,8.4A2.4,2.4,0,1,1,9.4,25,2.4,2.4,0,0,1,7,27.4Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'h', d: 'M25,19a6,6,0,1,0,6,6A6,6,0,0,0,25,19Zm0,8.5A2.5,2.5,0,1,1,27.5,25,2.5,2.5,0,0,1,25,27.5Z' }), []), React.createElement('circle', transform('circle', { key: 3, className: 'h', cx: '26', cy: '5', r: '4' }), []), React.createElement('path', transform('path', { key: 4, className: 'h', d: 'M27.3,11.6H25.7a3.7,3.7,0,0,1-1.7-.2,8.2,8.2,0,0,1-1.8-1.3C21.2,9,20.1,8,18.6,8h0c-3.9,0-8.4,4.4-8.8,5.4A3.5,3.5,0,0,0,11,17.6l2.9,2.4c.6.6,1.1.8,1,1.5s-.2,1.4-.3,2.1l-.2,1.7A1.3,1.3,0,0,0,15.6,27a1.5,1.5,0,0,0,1.7-.8,22.8,22.8,0,0,0,.7-2.3c.3-.9.5-1.9.7-2.4.9-2.5-.3-4-2.4-5.9a.9.9,0,0,1-.4-.5h0c0-.2.3-.6,1.1-1a4.2,4.2,0,0,1,3.1-.5l.9.4,1.4.6a7.2,7.2,0,0,0,3.1.2h1c.6,0,1.6-.1,1.9-1.2A1.6,1.6,0,0,0,27.3,11.6Z' }), [])])
    }

    exports.Cycling = function Cycling (props) {
      var transform = props.transform || defaultTransform
      return React.createElement('svg', transform('svg', { key: 0, xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', viewBox: '0 0 32 32', width: '1em', height: '1em', style: { transform: 'translate(0, 0.18em)' } }), [React.createElement('title', transform('title', { key: 0 }), []), React.createElement('path', transform('path', { key: 1, className: 'h', d: 'M7,19a6,6,0,1,0,6,6A6,6,0,0,0,7,19Zm0,8.4A2.4,2.4,0,1,1,9.4,25,2.4,2.4,0,0,1,7,27.4Z' }), []), React.createElement('path', transform('path', { key: 2, className: 'h', d: 'M25,19a6,6,0,1,0,6,6A6,6,0,0,0,25,19Zm0,8.5A2.5,2.5,0,1,1,27.5,25,2.5,2.5,0,0,1,25,27.5Z' }), []), React.createElement('circle', transform('circle', { key: 3, className: 'h', cx: '26', cy: '5', r: '4' }), []), React.createElement('path', transform('path', { key: 4, className: 'h', d: 'M27.3,11.6H25.7a3.7,3.7,0,0,1-1.7-.2,8.2,8.2,0,0,1-1.8-1.3C21.2,9,20.1,8,18.6,8h0c-3.9,0-8.4,4.4-8.8,5.4A3.5,3.5,0,0,0,11,17.6l2.9,2.4c.6.6,1.1.8,1,1.5s-.2,1.4-.3,2.1l-.2,1.7A1.3,1.3,0,0,0,15.6,27a1.5,1.5,0,0,0,1.7-.8,22.8,22.8,0,0,0,.7-2.3c.3-.9.5-1.9.7-2.4.9-2.5-.3-4-2.4-5.9a.9.9,0,0,1-.4-.5h0c0-.2.3-.6,1.1-1a4.2,4.2,0,0,1,3.1-.5l.9.4,1.4.6a7.2,7.2,0,0,0,3.1.2h1c.6,0,1.6-.1,1.9-1.2A1.6,1.6,0,0,0,27.3,11.6Z' }), [])])
    }
  