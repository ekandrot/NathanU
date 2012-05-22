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


