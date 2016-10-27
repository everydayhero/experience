
# ϟ cxsync

Everything that CXS offers, except:
- styles are added synchronously so you don't get janky FOUS between UI state changes and CSS updates
- actually fucking uses its cache to avoid doing unecessary work. Jesus. 
- no longer tries to be "helpful" by extracing common properties into their own classes (for dubious benefit), fixing bugs related to media queries attempting to override these properties
- it accepts any number of style objects passed as args (combining them into one and returning a single className)
- it always prefixes all styles (so it's useful in production)
- it correctly handles IE's `ms` vendor prefix
- it only appends new selectors (that don't already exist in the `<head>`)
- it only prefixes necessary properties (those required by the environment) and only when necessary
- it handles `content: ''` to not require `content: '""'`
- it `console.warn`s when you attempt to use a property or value that isn't supported in the current environmnet

TODO: 
- media query smart ordering (hard problem)
- handle server-side rendering by doing all the vendor prefixing
