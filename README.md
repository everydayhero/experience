# Everydayhero Experience Monorepo

You've reached Everydayhero's monorepo collecting all of our Experience Design
tools and documentation sites. You're probably interested in one or more of
the packages in `./packages`.

## Getting Started

If you're working on a feature in this repo, you'll need to set it up on your machine with Lerna, the utility that manages our monorepo. At the moment we're using a beta version of Lerna 2, since Lerna 1 doesn't actually work. The easiest way to get started is to install Lerna globally:

```
npm install -g lerna@2.0.0
```

Once you have lerna installed, run:

```
lerna bootstrap --hoist
```

from the root of the repository. This will install all packages' dependencies, transpile them, and symlink any interdependent packages together.
