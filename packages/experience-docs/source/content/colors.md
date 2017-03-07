---
title: Colors
path: /colors
status: amber
imports:
  ColorSwatch: '../components/ColorSwatch/index.js'
  ColorPalette: '../components/ColorPalette/index.js'
  ColorContrast: '../components/ColorContrast/index.js'
  Image: '../components/Image/index.js'
  colorRelationshipSvg: './images/colours.svg'
---

Everydayhero colors are categorised into Primary, Secondary, and Tertiary brand colors. These represent the only colors that should be used when developing applications, marketing, or communications for Everydayhero. These colors, especially green and light green, serve as core recall elements to help consistently reinforce our brand.

## Everydayhero brand palette

### Primary colors

These colors should be the dominant colors when communicating the context of Everydayhero as a brand. Green is our core brand color, and should only be used to highlight the core message or intent, or draw attention to the impact people are making.

```render html
<ColorSwatch color='green' />
<ColorSwatch color='charcoal' />
<ColorSwatch color='grey' />
<ColorSwatch color='white' />
```

### Secondary colors

These colors should be used to support, emphasise, and frame design elements. They are most often used in UI and designs which support illustrations, and as accents to add life and depth.

```render html
<ColorSwatch color='lightgreen' />
<ColorSwatch color='blue' />
<ColorSwatch color='lightblue' />
<ColorSwatch color='silver' />
```

### Tertiary colors

These colors are used sparingly, to provide context for critical information where the cultural meaning of color is crucial, and in illustrations and iconography.

```render html
<ColorSwatch color='cyan' />
<ColorSwatch color='purple' />
<ColorSwatch color='pink' />
<ColorSwatch color='red' />
<ColorSwatch color='orange' />
<ColorSwatch color='yellow' />
```

## Usage Guidelines

In general, primary, secondary, and tertiary colors should not be used in proportions greater than they appear in the illustration below. This means that white should always have the greatest representation, followed by charcoal, light blue, grey, blue, light green, and so on. These proportions apply to a complete design when taken as a whole, and not to individual elements, such as icons, inputs, footers, etc.  

## Relationship

Here is a visual guide on how to prioritise color use.

```render html
<Image src={colorRelationshipSvg} width='normal' />
```

### Calls to action
```render html
<ColorPalette palette='cta' />
```

### Text
```render html
<ColorPalette palette='text' />
```

### Backgrounds
```render html
<ColorPalette palette='bg' />
```

### Borders
```render html
<ColorPalette palette='border' />
```

### Actions
```render html
<ColorPalette palette='action' />
```

### Callout
```render html
<ColorPalette palette='callout' />
```

### Accents
```render html
<ColorPalette palette='accent' />
```

### Status indications
```render html
<ColorPalette palette='status' />
```

### Accessibility
Contrast is the primary concern when using the Everydayhero colors. Important information or elements must have sufficiently high contrast within their context, while non-critical framing or design motifs can show lower contrast.

The colors have been selected to have sufficient contrast for differentiation with all forms of color-blindness, however text must always be highly legible on all displays. Text must always be either charcoal, grey, blue, light blue, or white, but the following rules apply when displayed on other colors:


```render html
<ColorContrast textColors={['charcoal', 'grey', 'blue']} backgroundColors={['charcoal', 'blue', 'grey']} />
<ColorContrast textColors={['blue', 'grey', 'lightblue', 'white']} backgroundColors={['lightgreen']} />
<ColorContrast textColors={['lightblue', 'white']} backgroundColors={['lightblue', 'silver', 'white']} />
```
