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



// Lesson 2.1

var prelude = function(expr) {
    return {tag:'seq', left: {tag: 'note', pitch: 'd4', dur: 500}, right: expr};
};
//console.log(prelude(melody1));
//console.log(prelude(melody2));


// Lesson 2.2

var reverse = function(expr) {
    if (expr.tag == 'note')
        return expr;
    if (expr.tag == 'seq')
        return { tag:'seq',
            left: reverse( expr.right ),
            right: reverse( expr.left )};
};
//console.log(reverse(melody1));
//console.log(reverse(melody2));
//console.log(reverse(melody3));


// Lesson 2.3

var endTime = function (time, expr) {
    if (expr.tag == 'note')
        return time + expr.dur;
    // assume expr.tag == 'seq' at this point
    return time + endTime( 0, expr.left ) + endTime( 0, expr.right );
};
//console.log(endTime(0, melody1));
//console.log(endTime(10, melody2));
//console.log(endTime(23, melody3));


// Lesson 2.4

var leftWalk = function( expr, r, time ) {
    if (expr.tag == 'note') {
        r.push( {tag:'note', pitch:expr.pitch, start:time, dur:expr.dur} );
        return time + expr.dur;
    }
    // assume expr.tag == 'seq' at this point
    time = leftWalk( expr.left, r, time );
    time = leftWalk( expr.right, r, time );
    return time;
};

var compile = function (musexpr) {
    var r = [];
    leftWalk( musexpr, r, 0 );
    return r;
};
//console.log(compile(melody1));
//console.log(compile(melody2));
//console.log(compile(melody3));


