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

#### Custom base

In case you need more digits (moar?) or maybe less (less?!!) you specify a custom base:

```js
semverToInt('13.3.7') // 140000400007
semverToInt('13.3.7', 12) // 14000004000007
```

You might need this if you have humongous numbers

```js
// this is wrong
semverToInt('13.300000.7') // 170000100007
// becuase is greater than
semverToInt('15.0.0') // 150000100000
// but you can increase the base
semverToInt('13.300000.7', 12) // 14300001000007
semverToInt('14.0.0', 12) // 15000001000000
```

