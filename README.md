giphy
=====

cli for Giphy web service

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/giphy.svg)](https://npmjs.org/package/giphy)
[![Downloads/week](https://img.shields.io/npm/dw/giphy.svg)](https://npmjs.org/package/giphy)
[![License](https://img.shields.io/npm/l/giphy.svg)](https://github.com/shazron/giphy/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g giphy
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
giphy/0.0.1 darwin-x64 node-v8.15.1
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example giphy:random [TAG]`](#oclif-example-giphyrandom-tag)

## `oclif-example giphy:random [TAG]`

Grabs a random gif from giphy

```
USAGE
  $ oclif-example giphy:random [TAG]

ARGUMENTS
  TAG  filters results by the specified tag

OPTIONS
  -k, --api-key=api-key        the Giphy API key
  -l, --link                   show link only
  -r, --rating=y|g|pg|pg-13|r  [default: g] filters results by specified rating
```

_See code: [src/commands/giphy/random.js](https://github.com/shazron/giphy/blob/v0.0.1/src/commands/giphy/random.js)_
<!-- commandsstop -->
