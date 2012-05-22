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


//--------------------- code ---------------------------

// converts two letter codes into midi numbers
// c4 returns 60, e4 returns 64, etc
// based on function I saw on the forums by markwaddle
var convertPitch = function( note ) {
    var conv = {a:9, b:11, c:0, d:2, e:4, f:5, g:7};
    return conv[note[0]] + (12 * note[1]) + 12;
}


var leftWalk = function( expr, r, time ) {
    switch(expr.tag) {
        case 'note':
            r.push( {tag:'note', pitch:convertPitch(expr.pitch), start:time, dur:expr.dur} );
            time += expr.dur;
            break;
        case 'par':
            time = Math.max( leftWalk( expr.left, r, time ), leftWalk( expr.right, r, time ) );
            break;
        case 'seq':
            time = leftWalk( expr.left, r, time );
            time = leftWalk( expr.right, r, time );
            break;
        case 'rest':
            time += expr.duration;
            break;
        default :
            console.log( "Unknown tag!  " + expr.tag );
    }
    return time;
};

var compile = function (musexpr) {
    var r = [];
    leftWalk( musexpr, r, 0 );
    return r;
};

console.log(compile(harmony));