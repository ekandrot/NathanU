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
    spacedword+

spacedword =
    first:" "* second:word
        {return second;}

word =
    first:lowerLetter rest:lowerLetter*
        {return first + rest.join("");}

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
