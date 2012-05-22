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


// lesson 3.5

start =
    expression

expression =
    spacedatom
  / list
    
validchar
    = [0-9a-zA-Z_?!+\-=@#$%^&*/.]

spacedatom =
    " "* atom:atom
        {return atom;}

atom =
    chars:validchar+
        { return chars.join(""); }

list =
    " "* "(" expr:expression+ ")"
        {return expr;}

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


