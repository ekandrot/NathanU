// from Nathan on the forums
var wrapExceptions = function(f) {
    return function(x) {
        try {
            return f(x);
        }
        catch(err) {
            return undefined;
        }
    };
};


var PEG = require('pegjs');
var assert = require('assert');
var fs = require('fs'); // for loading files

// Read file contents
var data = fs.readFileSync('my.peg', 'utf-8');
// Show the PEG grammar file
//console.log(data);
// Create my parser
var parse = PEG.buildParser(data).parse;
parse = wrapExceptions(parse);
// Do a test

//assert.deepEqual(parse(""), undefined);

console.log(parse("1"));
console.log(parse("(hello)"));
console.log(parse("(hello   world)"));
console.log(parse(" (  hello   world \t\n ) "));
console.log(parse("(+ (* 2 3) x)"));
console.log(parse("'x"));
console.log(parse("'(1 2 3)"));
console.log(parse("'(+ (* 2 3) x)"));

