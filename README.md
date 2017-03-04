# ϟ cxsync

````
npm i -S cxsync
yarn add cxsync
```

Improves on CXS in the following ways:
- memoizes repetitive tasks because `rendering speed > memory concerns`
- stores media queries in a separate sheet, so that they always take precedence
- accepts any number of style objects passed as args
- always prefixes all styles (so it's useful in production)
- correctly handles IE's `ms` vendor prefix
- only prefixes necessary properties (those required by the environment) and only when necessary
- handles `content: ''` to not require `content: '""'`
- handles IE11's broken "support" for `justifyContent`

## Additional Features:

### "Styled" HoC for react components

```
import styled from 'csync/styled'
...
const Button = styled(styles.button)('button')
```

### Utilities to assist in creating re-usable css traits

```
import {colorGenerator, fluidType} from 'cxsync/trait-utils'
```

#### colorGenerator

```
// colorGenerator(colorMapOfRGBArrays, [tintsObject|optional], [opacitiesArray|optional])
// tints colors by conversion through lab color space

const colors = colorGenerator({
  red: [255, 0, 0],
  blue: [0, 0, 255]
}, {
  dark: 0.8,
  light: 1.2
}, [33, 66])

// Object.keys(colors) -> [
  red_dark,
  red,
  red_light,
  red_dark_33,
  red_dark_66,
  red_33,
  red_66,
  red_light_33,
  red_light_66,
  blue_dark,
  blue,
  blue_light,
  blue_dark_33,
  blue_dark_66,
  blue_33,
  blue_66,
  blue_light_33,
  blue_light_66,
]
```

#### fluidType

```
const typeBasis = {
  minFontSize = 14,
  maxFontSize = 20,
  minLeading = 1.2,
  maxLeading = 1.62,
  minViewWidth = 320,
  maxViewWidth = 1600,
  minTypeScale = 1.1,
  maxTypeScale = 1.4
} // these are the provided defaults, override some or all with whatever your design requires
const paragraphStyles = fluidType(typographybase)
const h1Styles = fluidType({...typeBasis, typeLevel: 6})
const h2Styles = fluidType({...typeBasis, typeLevel: 5})
const h3Styles = fluidType({...typeBasis, typeLevel: 4})
const h4Styles = fluidType({...typeBasis, typeLevel: 3})
const h5Styles = fluidType({...typeBasis, typeLevel: 2})
const h6Styles = fluidType({...typeBasis, typeLevel: 1})
// typeLevel is the exponent applied to (min|max)TypeScale. Default is 0
```


TODO: 
- handle server-side rendering by doing all the vendor prefixing
