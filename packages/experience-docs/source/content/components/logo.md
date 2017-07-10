---
title: Logo Component
navTitle: Logo
path: /components/logo
status: orange
imports:
  Lead: '../../components/Lead'
  Logo: '@everydayhero/ui-logo'
  InvertedBackground: '../../components/InvertedBackground'
---

The logo component is a simple display component for applying our branding in
your React application.

## Install

```shell
npm install @everydayhero/ui-logo --save
```

## Usage

```js
import Logo from '@everydayhero/ui-logo'
```

### Standard

It's a standard React component, so render it in your JSX. The default
params will give you our standard logo, with our default padding.

```render source html
<Logo />
```

**Note:** the logo components renders as an inline SVG, and will expand to fill
its container element while maintaining its aspect ratio. To size them
predictably, wrap it in an element with a constrained width or height.

### Inverted

A pure white inverted logo, useful for rendering on dark backgrounds

```render html
<InvertedBackground>
  <Logo inverted />
</InvertedBackground>
```

```js
<Logo inverted />
```

**Note:** inverted logos are white logos with a transparent background. Make
sure they're over a dark background or they won't look good.

### Mark

Our logomark, which is the Everydayhero heart alone.

```render html
<div style={{
  maxWidth: '12rem',
  margin: '0 auto'
}}>
  <Logo type='mark' />
</div>
```

```js
<Logo type='mark' />
```

### Inverted Mark

Similarly, our logo mark can also be inverted

```render html
<div style={{
  maxWidth: '12rem',
  margin: '0 auto'
}}>
  <InvertedBackground>
    <Logo type='mark' inverted />
  </InvertedBackground>
</div>
```

```js
<Logo type='mark' inverted />
```

**Note:** inverted logos are white logos with a transparent background. Make
sure they're over a dark background or they won't look good.

### Powered By Logo

The Powered By Logo is useful for branding white-labelled forms, where we want
to also include our own branding (usually at the bottom).

```render html
<div style={{
  maxWidth: '16rem',
  margin: '0 auto'
}}>
  <Logo type='powered-by' />
</div>
```

```js
<Logo type='powered-by' />
```

### Powered By Logo Inverted

It also comes in an inverted version.

```render html
<div style={{
  maxWidth: '16rem',
  margin: '0 auto'
}}>
  <InvertedBackground>
    <Logo type='powered-by' inverted />
  </InvertedBackground>
</div>
```

```js
<Logo type='powered-by' inverted />
```

**Note:** inverted logos are white logos with a transparent background. Make
sure they're over a dark background or they won't look good.

### Unpadded

Any logo can be optionally rendered without the default padding by setting the
padded prop to false. We recommend you avoid removing default padding unless
your use case demands it (for example, where the container already pads the
element).


```render source html
<Logo type='logo' padded={false} />
```
