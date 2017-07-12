---
title: Typography
path: /typography
status: amber
---

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
To stay consistent we use a 1.25 type scale, based on a 12pt/16px font size. Limit it from -1 to 6, unless you need to go larger for print. It should also be rounded to the nearest whole pixel. When used in code, always use relative sizes (rem/em).

- `type.scale(-1) | 0.8125rem | 13px`
- `type.scale(0) | 1rem | 16px`
- `type.scale(1) | 1.25rem | 20px`
- `type.scale(2) | 1.5625rem | 25px`
- `type.scale(3) | 1.9375rem | 31px`
- `type.scale(4) | 2.4375rem | 39px`
- `type.scale(5) | 3.0625rem | 49px`
- `type.scale(6) | 3.8125rem | 61px`

On smaller screens, we should move to a tighter type scale. Small screens should be 1.125 and medium screens 1.2. This can be achieved with the type scale function by passing an extra parameter.

`type.scale(6, 'sm')`

### Weight

We only use two weights, medium (500) and extra bold (800). Headings, buttons, links, active navigation, input labels, etc, should usually be bold. Prose and input text should always be medium.

### Leading

We use three different, relative leading options.

- `type.leading.tightest: 1`
- `type.leading.tighter: 1.25`
- `type.leading.prose: 1.5`

### Tracking
Normal tracking should be used for the majority of type. But a tight option can be used for large display type/headings

- `type.leading.tighter: -0.03em`
- `type.leading.tight: -0.01em`
- `type.leading.normal: 0`

### Measure
Line length should ideally be around 60 characters and should not exceed 80 characters.

### Paragraph Spacing
Split paragraphs with a relative bottom margin of `0.75` of it's line-height. e.g. `16px` has a line-height of `1.5/24px` and a bottom margin of `18px` . In code just use `1.125em`.
