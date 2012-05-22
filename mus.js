var prelude = function(expr) {
    var s = new String(expr);
    var x = "{ tag: 'seq',\n  left: { tag: 'note', pitch: 'd4', dur: 500 },\n  right: " + str(expr);
    return x + "}"

};

var melody1 = { tag: 'note', pitch: 'c4', dur: 250 };
var melody2 = 
    { tag: 'seq',
      left: { tag: 'note', pitch: 'd4', dur: 500 },
      right: { tag: 'note', pitch: 'c4', dur: 250 } };
var melody3 = 
    { tag: 'seq',
      left: { tag: 'note', pitch: 'd4', dur: 500 },
      right:
       { tag: 'seq',
         left: { tag: 'note', pitch: 'd4', dur: 500 },
         right: { tag: 'note', pitch: 'c4', dur: 250 } } };

console.log(prelude(melody1));
