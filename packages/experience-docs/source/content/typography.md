---
imports:
  Status: '../components/Status/index.js'
---
```render html
<Status status='orange' />
```
# Typography

## Typeface

Proxima Nova has a human, organic character that speaks to our principle of being familiar. The extra-bold weight that we use for emphasis has adds an empowering 

### Benefits of a single typeface:

- Less data over the wire. Particularly important for our web applications.
- Fewer decisions about when to use which typeface.
- Easier to get it right for non-designers.

### Resources

- [Typekit - Proxima Nova](https://typekit.com/fonts/proxima-nova)
- Self-hosted file to come

## Usage Guidelines

### Scale
To stay consistent we use a 1.25 type scale, based on a 12pt/16px font size. Limit it from -1 to 6, unless you need to go larger for print. It should also be rounded to the nearest whole pixel. When used in code, always use relative sizes (rem/em)

- scale(-1) | 0.8125rem | 13px
- scale(0) | 1rem | 16px
- scale(1) | 1.25rem | 20px
- scale(2) | 1.5625rem | 25px
- scale(3) | 1.9375rem | 31px
- scale(4) | 2.4375rem | 39px
- scale(5) | 3.0625rem | 49px
- scale(6) | 3.8125rem | 61px

### Weight
We only use two weights, medium (500) and extra bold (800). Headings, buttons, links, active navigation, input labels, etc, should usually be bold. Prose and input text should always be medium. 

### Leading
We use three different, relative leading options.

- Display: 1
- UI: 1.25
- Prose: 1.5

### Tracking
Normal tracking should be used for the majority of type. But a tight option can be used for large display type/headings

- Tight: -0.3
- Normal: 0

### Measure
Line length should ideally be around 60 characters and should not exceed 80 characters. 

### Paragraph Spacing
Split paragraphs with a relative bottom margin of `0.75` . e.g. `16px` has a bottom margin of `12px` . In code just use `.75em` 
