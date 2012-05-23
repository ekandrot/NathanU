// lesson 3.1

start =
    letter

letter =
    [A-Z]


// lesson 3.2

start =
    countrycode

letter =
	[a-z]

countrycode =
    first:letter second:letter
    	{return first+second;}


// lesson 3.3

start =
    word

word =
    lowerWord
  / upperWord

lowerWord =
    first:lowerLetter rest:lowerLetter*
        {return first + rest.join("");}

upperWord =
    first:upperLetter rest:upperLetter*
        {return first + rest.join("");}

lowerLetter =
    [a-z]

upperLetter =
    [A-Z]


// lesson 3.4
// start of Scheem parser

start =
    wordlist

wordlist =
    w:word s:spacedword*
        {return [w].concat(s);};

spacedword =
    " "* word:word
        {return word;}

word =
    first:lowerLetter+
        {return first.join("");}

lowerLetter =
    [a-z]

// lesson 3.4
// solution from DigiTec on the forum - very sleek
start =
    wordlist

word =
    all:[a-z]+ { return all.join(""); }

wordlist =
    first:word other:(" " word)* 
        {return [first].concat(other.map(function(elem) { return elem[1]; }));}



// lesson 3.5

start =
    expression

expression =
    atom
  / list
    
validchar
    = [0-9a-zA-Z_?!+\-=@#$%^&*/.]

spacedExpression =
    " "* expression:expression
        {return expression;}

atom =
    chars:validchar+
        { return chars.join(""); }

list =
    "(" expr:expression tail:spacedExpression* ")"
        {return [expr].concat(tail);}

// lesson 3.7
// adding a comma operator to supplied example

start =
    comma

comma =
    left:additive "," right:comma
        {return {tag:",", left:left, right:right};}
  / additive

additive =
    left:multiplicative "+" right:additive
        { return {tag: "+", left:left, right:right}; }
  / multiplicative

multiplicative =
    left:primary "*" right:multiplicative
        { return {tag: "*", left:left, right:right}; }
  / primary

primary =
    integer
  / "(" additive:additive ")"
      { return additive; }

integer =
    digits:[0-9]+
        { return parseInt(digits.join(""), 10); }


