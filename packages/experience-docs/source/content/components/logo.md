---
title: Logo Component
path: /components/logo
status: orange
imports:
  Lead: '../../components/Lead'
  Logo: '@everydayhero/ui-logo'
---

The logo component is a simple display component for applying our branding in
your React application.

## Install

```
npm install @everydayhero/ui-logo --save
```

## Usage

It's a standard React component, so render it in your JSX. The default
params will give you our standard logo, with our default padding.


### Standard

```render source html
<Logo />
```

### Inverted

A pure white inverted logo, useful for rendering on dark backgrounds

```render source html
<Logo inverted />
```

### Mark

Our logomark, which is the Everydayhero heart alone.

```render source html
<Logo type='mark' />
```

### Inverted Mark

Similarly, our logo mark can also be inverted

```render source html
<Logo type='mark' inverted />
```

### Powered By Logo

The Powered By Logo is useful for branding white-labelled forms, where we want
to also include our own branding (usually at the bottom).

```render source html
<Logo type='powered-by' />
```

### Powered By Logo Inverted

It also comes in an inverted version.

```render source html
<Logo type='powered-by' inverted />
```

### Unpadded

Any logo can be optionally rendered without the default padding by setting
`padded={false}`. We recommend you avoid removing default padding unless your
use case demands it (for example where the container already pads the element).


```render source html
<Logo type='mark' padded={false} />
```
