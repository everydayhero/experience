---
title: Icons
path: /icons
status: red
imports:
  Icon: '../components/Icon/index.js'
  Lead: '../components/Lead/index.js'
---

```render html
<Lead>Icons guide and inform our users, clarifying meaning and establishing expectations. Icons are most effective when they are familiar, consistent, and recognizable. Good icons harmonize with typography and with the rest of the design language. They don’t mix metaphors, and they communicate only what’s needed, as speedily and simply as possible.</Lead>
```

---

Everydayhero icons are an extension of our brand's emoji illustrations, primarily used in interactive UI applications. For sales, marketing, and presentation collateral, prefer to use the emoji.  

All icons are implemented as three levels of detail. These levels are toggled as flat | mono | emoji | sticker, and each level has its own usage guidelines.

### Flat

Flat icons are the preferred usage in most situations. They appear as a single solid currentColor silhouette.

```render html
<Icon icon='camera' kind='flat' />
<Icon icon='clap_hands' kind='flat' />
<Icon icon='donation' kind='flat' />
<Icon icon='earth' kind='flat' />
<Icon icon='duck' kind='flat' />
<Icon icon='penguin' kind='flat' />
<Icon icon='open_book' kind='flat' />
<Icon icon='question' kind='flat' />
<Icon icon='search' kind='flat' />
<Icon icon='star' kind='flat' />
<Icon icon='heart' kind='flat' />
<Icon icon='share' kind='flat' />
<Icon icon='check' kind='flat' />
<Icon icon='cross' kind='flat' />
<Icon icon='plus' kind='flat' />
<Icon icon='minus' kind='flat' />
```

### Mono

Mono icons can be used for themed or whitelabel applications. They appear as a currentColor icon with interior details such as highlights, shadows, and outlines.

```render html
<Icon icon='camera' kind='mono' />
<Icon icon='clap_hands' kind='mono' />
<Icon icon='donation' kind='mono' />
<Icon icon='earth' kind='mono' />
<Icon icon='duck' kind='mono' />
<Icon icon='penguin' kind='mono' />
<Icon icon='open_book' kind='mono' />
<Icon icon='question' kind='mono' />
<Icon icon='search' kind='mono' />
<Icon icon='star' kind='mono' />
<Icon icon='heart' kind='mono' />
<Icon icon='share' kind='mono' />
<Icon icon='check' kind='mono' />
<Icon icon='cross' kind='mono' />
<Icon icon='plus' kind='mono' />
<Icon icon='minus' kind='mono' />
```

### Emoji

Emoji icons can be used to add color and context to a view, but should be used sparingly.

```render html
<Icon icon='camera' kind='emoji' />
<Icon icon='clap_hands' kind='emoji' />
<Icon icon='donation' kind='emoji' />
<Icon icon='earth' kind='emoji' />
<Icon icon='duck' kind='emoji' />
<Icon icon='penguin' kind='emoji' />
<Icon icon='open_book' kind='emoji' />
<Icon icon='question' kind='emoji' />
<Icon icon='search' kind='emoji' />
<Icon icon='star' kind='emoji' />
<Icon icon='heart' kind='emoji' />
<Icon icon='share' kind='emoji' />
<Icon icon='check' kind='emoji' />
<Icon icon='cross' kind='emoji' />
<Icon icon='plus' kind='emoji' />
<Icon icon='minus' kind='emoji' />
```

### Sticker

Sticker icons can be used when it's necessary to display a colorful icon on a colored or image background. They should be used sparingly, preferrably limited to one per view.

```render html
<Icon icon='camera' kind='sticker' />
<Icon icon='clap_hands' kind='sticker' />
<Icon icon='donation' kind='sticker' />
<Icon icon='earth' kind='sticker' />
<Icon icon='duck' kind='sticker' />
<Icon icon='penguin' kind='sticker' />
<Icon icon='open_book' kind='sticker' />
<Icon icon='question' kind='sticker' />
<Icon icon='search' kind='sticker' />
<Icon icon='star' kind='sticker' />
<Icon icon='heart' kind='sticker' />
<Icon icon='share' kind='sticker' />
<Icon icon='check' kind='sticker' />
<Icon icon='cross' kind='sticker' />
<Icon icon='plus' kind='sticker' />
<Icon icon='minus' kind='sticker' />
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

### Sticker

- Never display sticker icons smaller than 2.5em
- Never display sticker icons inline with text
- Always ensure plenty of spacing surrounding emoji icons, proportional to roughly one-third their width

## Creation Guidelines

All icons are created inline with the guidelines for illustration. They are constructred from a predefined set of lines and shapes, and built on a 32px square artboard. No portion of the icon should appear semi-transparent when set against a background (with the sole exception of the drop shadow on sticker icons).

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

### Sticker

Sticker versions of icons are made by applying a white stroke the width of the outlines around an emoji, and a vector drop shadow set at 40% opacity and projected 45 degrees south east, extending the width of the emoji outlines.
