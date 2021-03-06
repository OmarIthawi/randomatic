# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %})

> {%= description %}

## Quickstart

### [npm](https://npmjs.org/)

```bash
npm i {%= name %} --save
```

### [bower](https://github.com/bower/bower)

```bash
bower install {%= name %} --save
```

## Documentation

```js
var {%= shortname %} = require('{%= name %}');
```

### Params

The following parameters can be passed (`randomize(Pattern, Length, Options)`)

#### pattern
Type: `String` (required)

Default: `undefined`

* `a`: Lowercase alpha characters (`abcdefghijklmnopqrstuvwxyz'`)
* `A`: Uppercase alpha characters (`ABCDEFGHIJKLMNOPQRSTUVWXYZ'`)
* `0`: Numeric characters (`0123456789'`)
* `!`: Special characters (`~!@#$%^&()_+-={}[];\',.`)
* `*`: All characters (all of the above combined)
* `?`: Custom characters (pass a string of custom characters to the options)

Patterns can contain any combination of the above characters, in any order. For example, `randomize('Aa0!', 10)` will generate a 10-character randomized string with all of the specified patterns.

#### length
Type: `Number` (optional)

Default: `undefined`

Specify the number of characters/digits to generate in the output.

Examples:

* `randomize('A', 5)` will generate a 5-character, uppercase, alphabetical, randomized string, e.g. `KDJWJ`.
* `randomize('0', 2)` will generate a 2-digit random number
* `randomize('0', 3)` will generate a 3-digit random number
* `randomize('0', 12)` will generate a 12-digit random number
* `randomize('A0', 16)` will generate a 16-character, alpha-numeric randomized string

If `length` is left undefined, the length of the pattern in the first parameter will be used. For example:

* `randomize('00')` will generate a 2-digit random number
* `randomize('000')` will generate a 3-digit random number
* `randomize('0000')` will generate a 4-digit random number...
* `randomize('AAAAA')` will generate a 5-character, uppercase alphabetical random string...

...and so on.

#### options
Type: `Object` (optional)

Default: `undefined`

Currently the only option is `chars`, which allows you to define a custom string to be randomized. For example:

* `randomize('?', 20, {chars: 'jonschlinkert'})` will generate a 20-character randomized string from the letters contained in `jonschlinkert`.
* `randomize('?', {chars: 'jonschlinkert'})` will generate a 13-character randomized string from the letters contained in `jonschlinkert`.


## Usage Examples

* `randomize('A', 4)` (_whitespace insenstive_) would result in randomized 4-digit uppercase letters, like, `ZAKH`, `UJSL`... and so on.
* `randomize('AAAA')` is equivelant to `randomize('A', 4)`
* `randomize('AAA0')` and `randomize('AA00')` and `randomize('A0A0')` are equivelant to `randomize('A0', 4)`
* `randomize('aa')`: results in double-digit, randomized, lower-case letters (`abcdefghijklmnopqrstuvwxyz`)
* `randomize('AAA')`: results in triple-digit, randomized, upper-case letters (`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)
* `randomize('0', 6)`: results in six-digit, randomized nubmers (`0123456789`)
* `randomize('!', 5)`: results in single-digit randomized, _valid_ non-letter characters (`~!@#$%^&()_+-={}[];\',.`)
* `randomize('A!a0', 9)`: results in nine-digit, randomized characters (any of the above)

_The order in which the characters are provided has no impact on the outcome._

## Contributing
{%= _.contrib("contributing.md") %}

## Authors
{%= _.contrib("authors.md") %}

## License
{%= copyright %}
{%= license %}

***

{%= _.include("footer.md") %}