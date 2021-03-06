/**
 * TODO: add mocha tests
 */


// node_modules
var frep = require('frep');
var _ = require('lodash');
var chalk = require('chalk');
var info = chalk.cyan;

// Local lib
var randomize = require('../');

console.log(randomize('A', 12));
console.log(randomize('a', 12));
console.log(randomize('0', 12));
console.log(randomize('A0', 12));
console.log(randomize('Aa0', 12));
console.log(randomize('AAA'));
console.log(randomize('Aa0'));
console.log(randomize('000'));
console.log(randomize('?', {chars: 'jonschlinkert'}));
console.log(randomize('AAAAA', 3));
console.log(randomize('*', 16));


// Example replacement patterns. These replacement
// patterns are used in assemble-contrib-permalinks:
// https://github.com/assemble/assemble-contrib-permalinks
var replacements = [
  {
    pattern: /:random\(([^)]+)\)/,
    replacement: function (a, b) {
      var len, id, opts;
      if(b.match(/,/)) {
        var arr = b.split(',');
        id = arr[0];
        len = parseInt(arr[1], 10);
        opts = opts || {};
        opts.chars = (arr[2] || '').replace(/(^\s+|\s+$)/, '');
        return randomize(id, len, opts);
      } else {
        var len = b.length;
        return randomize(b, len);
      }
    }
  }
];

var patterns = {
  // Pattern            // Should result in...
  ':random(A, 10)'     : "alphabetical, 10 digit:",
  ':random(A, 5)'      : "alphabetical, 5 digits:",
  ':random(AA, 10)'    : "alphabetical, 10 digits:",
  ':random(Aa, 12)'    : "alphabetical, 12 digits:",
  ':random(A, 3)'      : "alphabetical, 3 digits:",
  ':random(AAa)'       : "alphabetical, 3 digits:",
  ':random(AA, 3)'     : "alphabetical, 3 digits:",
  ':random(A0, 5)'     : "alpha-numeric, 5 digits:",
  ':random(AA00, 5)'   : "alpha-numeric, 5 digits:",
  ':random(A0A0, 5)'   : "alpha-numeric, 5 digits:",
  ':random(AaAa0000)'  : "alpha-numeric, 8 digits:",
  ':random(0, 1)'      : "numeric, 1 digit:\t",
  ':random(0, 8)'      : "numeric, 8 digits:\t",
  ':random(00000000)'  : "numeric, 8 digits:\t",
  ':random(A0!, 7)'    : "special chars, 7 digits:",
  ':random(A0!a0A0)'   : "special chars, 7 digits:",
  ':random(Aa0)'       : "alphabetical, 1 digit:",
  ':random(*, 16)'     : "all characters, 16 digits:",
  ':random(?, 16, jonathan)' : "custom chars, 16 digit:"
};

_.forIn(patterns, function(value, key) {
  console.log('>> ' + info('Should be ' + value + '\t'), frep.strWithArr(key, replacements));
});