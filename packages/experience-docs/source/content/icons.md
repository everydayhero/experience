---
title: Icons
path: /icons
status: amber
imports:
  Icon: '../components/Icon/index.js'
  Lead: '../components/Lead/index.js'
---

```render html
<Lead>Icons guide and inform our users, clarifying meaning and establishing expectations. Icons are most effective when they are familiar, consistent, and recognizable. Good icons harmonize with typography and with the rest of the design language. They don’t mix metaphors, and they communicate only what’s needed, as speedily and simply as possible.</Lead>
```

---

Everydayhero icons are an extension of our brand's emoji illustrations, primarily used in interactive UI applications. For sales, marketing, and presentation collateral, prefer to use the emoji.  

All icons are implemented as three levels of detail. These levels are toggled as flat | mono | emoji, and each level has its own usage guidelines.

### Flat

Flat icons are the preferred usage in most situations. They appear as a single solid currentColor silhouette.

```render html
<div style={{color: '#2491BB'}}>
  <Icon name='camera' kind='flat' />
  <Icon name='clap_hands' kind='flat' />
  <Icon name='donation' kind='flat' />
  <Icon name='earth' kind='flat' />
  <Icon name='open_book' kind='flat' />
  <Icon name='question' kind='flat' />
  <Icon name='search' kind='flat' />
  <Icon name='star' kind='flat' />
  <Icon name='heart' kind='flat' />
  <Icon name='share' kind='flat' />
  <Icon name='check' kind='flat' />
  <Icon name='cross' kind='flat' />
  <Icon name='plus' kind='flat' />
  <Icon name='minus' kind='flat' />
  <Icon name='left' kind='flat' />
  <Icon name='right' kind='flat' />
  <Icon name='ellipses' kind='flat' />
  <Icon name='ellipses_partial' kind='flat' />
  <Icon name='facebook' kind='flat' />
  <Icon name='twitter' kind='flat' />
  <Icon name='lock' kind='flat' />
  <Icon name='visa' kind='flat' />
  <Icon name='mastercard' kind='flat' />
  <Icon name='american_express' kind='flat' />
  <Icon name='credit_card' kind='flat' />
  <Icon name='credit_card_number' kind='flat' />
  <Icon name='credit_card_expiry' kind='flat' />
  <Icon name='credit_card_cvv3' kind='flat' />
  <Icon name='credit_card_cvv4' kind='flat' />
</div>
```

### Mono

Mono icons can be used for themed or whitelabel applications. They appear as a currentColor icon with interior details such as highlights, shadows, and outlines.

```render html
<div style={{color: '#2491BB'}}>
  <Icon name='camera' kind='mono' />
  <Icon name='clap_hands' kind='mono' />
  <Icon name='donation' kind='mono' />
  <Icon name='earth' kind='mono' />
  <Icon name='open_book' kind='mono' />
  <Icon name='question' kind='mono' />
  <Icon name='search' kind='mono' />
  <Icon name='star' kind='mono' />
  <Icon name='heart' kind='mono' />
  <Icon name='share' kind='mono' />
  <Icon name='check' kind='mono' />
  <Icon name='cross' kind='mono' />
  <Icon name='plus' kind='mono' />
  <Icon name='minus' kind='mono' />
  <Icon name='left' kind='mono' />
  <Icon name='right' kind='mono' />
  <Icon name='ellipses' kind='mono' />
  <Icon name='ellipses_partial' kind='mono' />
  <Icon name='facebook' kind='mono' />
  <Icon name='twitter' kind='mono' />
  <Icon name='lock' kind='mono' />
  <Icon name='visa' kind='mono' />
  <Icon name='mastercard' kind='mono' />
  <Icon name='american_express' kind='mono' />
  <Icon name='credit_card' kind='mono' />
  <Icon name='credit_card_number' kind='mono' />
  <Icon name='credit_card_expiry' kind='mono' />
  <Icon name='credit_card_cvv3' kind='mono' />
  <Icon name='credit_card_cvv4' kind='mono' />
</div>
```

### Emoji

Emoji icons can be used to add color and context to a view, but should be used sparingly.

```render html
<div style={{color: '#2491BB'}}>
  <Icon name='camera' kind='emoji' />
  <Icon name='clap_hands' kind='emoji' />
  <Icon name='donation' kind='emoji' />
  <Icon name='earth' kind='emoji' />
  <Icon name='open_book' kind='emoji' />
  <Icon name='question' kind='emoji' />
  <Icon name='search' kind='emoji' />
  <Icon name='star' kind='emoji' />
  <Icon name='heart' kind='emoji' />
  <Icon name='share' kind='emoji' />
  <Icon name='check' kind='emoji' />
  <Icon name='cross' kind='emoji' />
  <Icon name='plus' kind='emoji' />
  <Icon name='minus' kind='emoji' />
  <Icon name='left' kind='emoji' />
  <Icon name='right' kind='emoji' />
  <Icon name='ellipses' kind='emoji' />
  <Icon name='ellipses_partial' kind='emoji' />
  <Icon name='facebook' kind='emoji' />
  <Icon name='twitter' kind='emoji' />
  <Icon name='lock' kind='emoji' />
  <Icon name='visa' kind='emoji' />
  <Icon name='mastercard' kind='emoji' />
  <Icon name='american_express' kind='emoji' />
  <Icon name='credit_card' kind='emoji' />
  <Icon name='credit_card_number' kind='emoji' />
  <Icon name='credit_card_expiry' kind='emoji' />
  <Icon name='credit_card_cvv3' kind='emoji' />
  <Icon name='credit_card_cvv4' kind='emoji' />
</div>
```

## Usage Guidelines

For all icons, the following rules apply:

- Never distort or skew icons
- Never use a non-brand icon within the same view as a brand icon (if you really need an icon, it's worth us developing an official version)
- Never use icons for purely decorative purposes
- Always ensure that icons are accompanied either by a text label, or alt text on the element

### Flat

- Never display flat icons smaller than 1em
- Never display flat icons larger than 3em
- Always ensure a minimum spacing surrounding flat icons, proportional to roughly one-fifth their width
- Always ensure sufficient contrast between the flat icon and the background color or image

### Mono

- Never use mono icons in Everydayhero branded views
- Never display mono icons smaller than 2em
- Never display mono icons inline with text
- Never use a currentColor darker than charcoal
- Always ensure sufficient contrast between the mono icon and any background color or image
- Always ensure plenty of spacing surrounding mono icons, proportional to roughly one-third their width

### Emoji

- Never display emoji icons smaller than 2em
- Never display emoji icons inline with text
- Never display emoji icons on tertiary background colors or images
- Always ensure plenty of spacing surrounding emoji icons, proportional to roughly one-third their width

## Creation Guidelines

All icons are created inline with the guidelines for illustration. They are constructred from a predefined set of lines and shapes, and built on a 32px square artboard. No portion of the icon should appear semi-transparent when set against a background.

- **Base shapes** must be solid color elements at 100% opacity. Tonal contrast is the primary factor contributing to legibility at UI sizes, and so must be a strong consideration in the palette chosen.
- **Outlines** must be charcoal, set to 40% opacity, 2px thick, overlayed on a base shape.
- **Shadows** must be charcoal, set to 20% opacity, overlayed on a base shape.
- **Highlights** must be white, set to 20% opacity, overlayed on a base shape, and should not touch or extend across outlines or adjacent colors.

### Flat

Flat versions of icons have no outlines, highlights, or shadows, and the base shape uses currentColor. The silhouette of the icon must be significantly and obviously different to all other brand icons. interior detail must come from negative space.

The flat version of an icon should be built first, with mono and emoji versions progressively adding more detail. This will ensure that the silhouette remains identifiable in all applications.

### Mono

Mono versions of icons are defined by setting all base shapes to use currentColor, with interior detail and tone levels coming from outlines, highlights, and shadows.

### Emoji

Emoji versions of icons must only use colors from our brand palette, and should be restricted to as few as possible, and no more than 3 colors.
