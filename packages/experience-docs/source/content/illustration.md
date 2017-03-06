---
title: Illustration
path: /illustration
status: amber
imports:
  IconList: '../components/IconList/index.js'
  Image: '../components/Image/index.js'
  rocket: './images/rocket.svg'
  invasion: './images/invasion.svg'
  illustrationlanguage: './images/illustrationlanguage.svg'
---

```render html
<Image src={invasion} width='narrow' align='center' />
```

> Illustration is a communication tool with three super powers. It can add clarity to a complex idea. It can link concepts to the words we’ve assigned them within our respective products (aka on-boarding). And, it can capture the values and traits of a brand in a single voice, shift the tone depending on the situation, and speak directly to the user.  
> **— Meg Robichaud ([Shopify](https://medium.com/shopify-ux/building-a-new-illustration-style-for-shopify-2b25dcf14117#.ttgq05afx))**

## When to use illustrations

Illustration is a decorative element, but it should also serve a purpose within your design. An illustration can be the focal element of a design—such as within an email template—and when used in this way should summarise or represent the design’s purpose at a glance.

**For example:** using the ‘clap hands’ emoji in our receipt emails is both decorative (it’s a large visual element) and functional (it expresses our gratitude to the donor).

### Do
- Build your illustrative designs around a single strong illustration.

### Do not
- Use illustration to represent our customers (photography is best here)
- Overuse illustrative elements

## How to choose an illustration

While we have many illustrative designs that are unique and built-to-purpose, we also provide a set of emoji icons illustrated in our signature style. If you’re creating a design that can benefit from illustration, but don’t want to create a bespoke illustration, you can choose a suitable emoji from the set below:

### Emoji Set

```render html
<IconList />
```

Choose an emoji that expresses the content of your design: for example, the ‘clap hands’ emoji for expressing thanks, or the ‘donating hand’ emoji for a call to donate.

## Creating an illustration

To achieve consistency with our illustration styles, you should base your illustration on the predefined set of shapes and strokes extracted from the Everydayhero heart logo.

```render html
<Image src={illustrationlanguage} />
```

You may add and modify elements as suits your design, but including some of the foundation strokes ensures your illustration’s shape will blend well with our friendly, asymmetric aesthetic.

```render html
<Image src={rocket} width='normal' align='center' />
```

### Our illustrations are
- Friendly 
- Bright and energetic 
- Colourful
- Hand drawn
- Attractive

### Our illustrations should have
- Fluid clean lines
- Harmonious colours (think of a well used Instagram filter)

### Our illustrations are never
- Childlike
- Busy or garish
- Rainbow
- Monotone
- Angular or pointy
- Messy
- Distracting
- Perfectly symmetric

### When to use fuller colour palette?

By full colour palette we mean using the brightest brights but also dipping in to lighter tones and subtle shading.

Typically we use the full palette only for medium/large sized spot illustrations as opposed to icons where we might prefer minimise details and keep things simple. Shadows and highlights are still fine, but if the concept still reads well without that extra detail then strongly consider leaving it out.

### Stroke weight

Our stroke weight should remain consistent but change relative to the size of the icon or illustration. This helps us achieve some consistency.

As a loose guideline we like to start with a standard canvas size of around 512px by 512px and start with a stroke weight of 2px. From there you can convert strokes to fills and scale up or down.
