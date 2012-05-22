var melody1 = { tag: 'note', pitch: 'c4', dur: 250 };

var melody2 = 
    { tag: 'seq',
      left: { tag: 'note', pitch: 'd4', dur: 500 },
      right: { tag: 'note', pitch: 'c4', dur: 250 } };

var melody3 = 
    { tag: 'seq',
      left:
       { tag: 'seq',
         left: { tag: 'note', pitch: 'd4', dur: 500 },
         right: { tag: 'note', pitch: 'c4', dur: 500 } },
      right:
       { tag: 'seq',
         left: { tag: 'note', pitch: 'b4', dur: 250 },
         right: { tag: 'note', pitch: 'a4', dur: 250 } } };

var harmony = { tag: 'par',
  left: { tag: 'note', pitch: 'c4', dur: 250 },
  right:
   { tag: 'par',
     left: { tag: 'note', pitch: 'e4', dur: 250 },
     right: { tag: 'note', pitch: 'g4', dur: 250 } } };




var leftWalk = function( expr, r, time ) {
    switch(expr.tag) {
        case 'note':
            r.push( {tag:'note', pitch:expr.pitch, start:time, dur:expr.dur} );
            return time + expr.dur;
            break;
        case 'par':
            return Math.max( leftWalk( expr.left, r, time ), leftWalk( expr.right, r, time ) );
            break;
        case 'seq':
            time = leftWalk( expr.left, r, time );
            time = leftWalk( expr.right, r, time );
            return time;
            break;
        case 'rest':
            return time + expr.duration;
            break;
        default :
            console.log( "Unknown tag!  " + expr.tag );
    }
    return 0;
};

var compile = function (musexpr) {
    var r = [];
    leftWalk( musexpr, r, 0 );
    return r;
};

console.log(compile(harmony));