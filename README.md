
# ϟ cxsync

Everything that CXS offers, except:
- styles are added synchronously so you don't get janky FOUS between UI state changes and CSS updates
- it accepts any number of style objects passed as args (combining them into one and returning a single className)
- it always prefixes all styles (so it's useful in production)
- it correctly handles IE's `ms` vendor prefix
- it only appends new selectors (that don't already exist in the `<head>`)

TODO: 
- handle `content: ''` to not require `content: '""'`
- handle `display` overrides in media queries 
- media query ordering
