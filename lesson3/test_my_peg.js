var PEG = require('pegjs');
var assert = require('assert');
var fs = require('fs'); // for loading files

// Read file contents
var data = fs.readFileSync('my.peg', 'utf-8');
// Show the PEG grammar file
//console.log(data);
// Create my parser
var parse = PEG.buildParser(data).parse;
// Do a test

//assert.deepEqual(parse(""), undefined);

//console.log(parse(""));
console.log(parse("dog"));
console.log(parse("black dog"));
console.log(parse("angry black dog"));
console.log(parse("Gray dog"));
//assert.deepEqual( parse("dog"), ["dog"] );

