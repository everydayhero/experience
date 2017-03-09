# Stranger

![I like your style dude](https://thumbs.gfycat.com/JaggedCandidAnnelid-size_restricted.gif)

A wrapper around our currently preferred CSS in JS solution, to provide a consistent API.

Also adds extra utility functions to help styling more composable components.

## Installation

```sh
yarn add @edh/stranger
npm i -S @edh/stranger
```

## Basic Usage

```js
import React from 'react'
import { addRule } from '@edh/stranger'

const Box = (props) => {
  return (
    <div {...props} className={className} />
  )
}

const className = addRule({
  padding: '2rem',
  backgroundColor: 'tomato'
})

export default Box
```

### Pseudoclasses

```js
cxs({
  color: 'tomato',
  ':hover': {
    color: 'red'
  }
})
```

### Media Queries

```js
cxs({
  color: 'tomato',
  '@media (min-width: 40em)': {
    color: 'red'
  }
})
```

### Nested Selectors

```js
cxs({
  color: 'tomato',
  h1: {
    color: 'red'
  }
})
```


### Server-Side Rendering

To use Stranger in server environments, use the `getCss()` function to get the static CSS string *after* rendering a view.

```js
import React from 'react'
import { ReactStyles, resetCache } from '@edh/stranger'

const Document = () => (
  <html>
    <head>
      // Other <head> things
      <ReactStyles />
    </head>
    <body>
      // <body> things
    </body>
  </html>
)

// Optionally reset the cache for the next render
resetCache()

```

## Stranger Things

### comp

For an API closer to styled-components, use `comp`. It allows composing multiple levels of components and provides access to global traits.

```js
import { comp } from '@edh/stranger'

const Button = comp(({ props, traits }) => ({
  backgroundColor: traits.color.cta.lighter
  borderRadius: traits.radius(5)
  padding: traits.size(3)
  fontSize: props.large && traits.scale(1)
}))('button')

const PrimaryButton = comp(({ traits }) => ({
  backgroundColor: traits.color.cta.darker
}))(Button)

// Style for PrimaryButton
// {
//   backgroundColor: 'rgb(27, 171, 107)' //cta.darker
//   borderRadius: '2rem'
//   padding: '0.5rem'
//   fontSize: '1.25rem'
// }
```

### withStyles

`withStyles` allows for styling multiple elements within one React component, while also giving access to traits and props with the style function/object. It adds a `classNames` prop (Your styles function/object processed to classnames) and a `styles` prop (Your styles function processed) for referencing in your component.

```js
import React from 'react'
import { withStyles } from '@edh/stranger'

const Button = withStyles(styles)({ classNames, ...props }) => (
  <button {...props} className={classNames.root} />
)

const styles = ({ props, traits }) => ({
  root: {
    backgroundColor: traits.color.cta.lighter
    borderRadius: traits.radius(5)
    padding: traits.size(3)
    fontSize: props.large && traits.scale(1)
  }
})
```

### stranger.defaultTraits

The default traits in Stranger come from `@edh/rug`. If you would like to change the defaults, you can.

```
import stranger from '@edh/stranger'

stranger.defaultTraits = {
  color: {
    green: 'green'
  }
}
```

It will completely override the default traits.

### TraitsProvider

`TraitsProvider` is a HoC that uses context to update the traits provided to stranger. The object you pass to it is merged to with the defaultTraits.

```
import React from 'react'
import { TraitsProvider } from 'stranger'

import Document from './Document'

const traits = {
  color: {
    green: 'green'
  }
}

const App = () => (
  <TraitsProvider traits={traits}>
    <Document />
  </Traits>
)
```
