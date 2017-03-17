---
title: Layout
path: /layout
status: red
imports:
  Lead: '../components/Lead/index.js'
---

```render html
<Lead>We use white space heavily to give clarity to content. Giving it room to breath and bringing focus. A spacing scale clearly defines the relationships between content, maintains conformity, and improves aesthetics.</Lead>
```

## Size/Spacing

When spacing out design, we use a consistent, exponential scale based on powers of 2. This should be primarily used for margin and padding between elements. It can be used for widths, heights etc. But it generally preferred to base these measurements on either the grid (e.g. horizontal layout) or the type scale (e.g. Icons).

When using Rug, you can access the size scale as a function `rug.size()`. In general design, here is the size scale to use.

- size(1)/0.125rem/2px
- size(2)/0.25rem/4px
- size(3)/0.5rem/8px
- size(4)/1rem/16px
- size(5)/2rem/32px
- size(6)/4rem/64px
- size(7)/8rem/128px
- size(8)/16rem/256px
- size(9)/32rem/512px
