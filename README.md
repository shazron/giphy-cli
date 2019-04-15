giphy
=====

cli for the Giphy web service

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/node-giphy.svg)](https://npmjs.org/package/node-giphy)
[![Downloads/week](https://img.shields.io/npm/dw/node-giphy.svg)](https://npmjs.org/package/node-giphy)
[![License](https://img.shields.io/npm/l/node-giphy.svg)](https://github.com/shazron/giphy-cli/blob/master/package.json)

![Sample command for giphy-cli](./giphy.png)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g node-giphy
$ giphy COMMAND
running command...
$ giphy (-v|--version|version)
node-giphy/0.0.1 darwin-x64 node-v8.15.1
$ giphy --help [COMMAND]
USAGE
  $ giphy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`giphy help [COMMAND]`](#giphy-help-command)
* [`giphy random [TAG]`](#giphy-random-tag)

## `giphy help [COMMAND]`

display help for giphy

```
USAGE
  $ giphy help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `giphy random [TAG]`

Grabs a random gif from giphy

```
USAGE
  $ giphy random [TAG]

ARGUMENTS
  TAG  filters results by the specified tag

OPTIONS
  -k, --api-key=api-key        the Giphy API key
  -l, --link-only              show link only
  -r, --rating=y|g|pg|pg-13|r  [default: g] filters results by specified rating
```

_See code: [src/commands/random.js](https://github.com/shazron/giphy-cli/blob/v0.0.1/src/commands/random.js)_
<!-- commandsstop -->
