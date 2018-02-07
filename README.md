# semverToInt

[![Build Status](https://travis-ci.org/sospedra/semvertoint.svg?branch=master)](https://travis-ci.org/sospedra/semvertoint)
[![David](https://img.shields.io/david/sospedra/semvertoint.svg)]()
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Safely convert any semver to an integer for easy comparisons in 677 Bytes

### Install

`yarn add semvertoint`

### Usage

```js
import semverToInt from 'semvertoint'

semverToInt('12.0.1') //
semverToInt('190.10.0') > semverToInt('190.09.9999') // true
semverToInt(require('./package.json').version)
```

Very useful to be combined with migrations policies, changelogs, etc.
You'll only need to mantain the `package.json` version (for example) and use it for all the historic changes that you need!

