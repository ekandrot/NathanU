
// lesson 4.1

var evalScheem = function (expr) {
    // Numbers evaluate to themselves
    if (typeof expr === 'number') {
        return expr;
    }
    // Look at head of list for operation
    switch (expr[0]) {
        case '+':
            return evalScheem(expr[1]) + evalScheem(expr[2]);
        case '-':
            return evalScheem(expr[1]) - evalScheem(expr[2]);
        case '*':
            return evalScheem(expr[1]) * evalScheem(expr[2]);
        case '/':
            return evalScheem(expr[1]) / evalScheem(expr[2]);
    }
};


// lesson 4.2

var evalScheem = function (expr, env) {
    // Numbers evaluate to themselves
    if (typeof expr === 'number') {
        return expr;
    }
    // Strings are variable references
    if (typeof expr === 'string') {
        return env[expr];
    }
    // Look at head of list for operation
    switch (expr[0]) {
        case '+':
            return evalScheem(expr[1], env) +
                   evalScheem(expr[2], env);
        case '-':
            return evalScheem(expr[1], env) -
                   evalScheem(expr[2], env);
        case '*':
            return evalScheem(expr[1], env) *
                   evalScheem(expr[2], env);
        case '/':
            return evalScheem(expr[1], env) /
                   evalScheem(expr[2], env);
    }
};


// lesson 4.3
// the spec says to return zero on defines, but I'd rather it return the value
// "Never throw away work" - we calculated the value, might as well return it
// but for this excerise, matching the spec is the way to go...

var evalScheem = function (expr, env) {
    // Numbers evaluate to themselves
    if (typeof expr === 'number') {
        return expr;
    }
    // Strings are variable references
    if (typeof expr === 'string') {
        return env[expr];
    }
    // Look at head of list for operation
    switch (expr[0]) {
        case '+':
            return evalScheem(expr[1], env) +
                   evalScheem(expr[2], env);
        case 'set!':
        case 'define':
            env[expr[1]] = evalScheem(expr[2],env);
            return 0;
    }
};


// lesson 4.4

var evalScheem = function (expr, env) {
    // Numbers evaluate to themselves
    if (typeof expr === 'number') {
        return expr;
    }
    // Strings are variable references
    if (typeof expr === 'string') {
        return env[expr];
    }
    // Look at head of list for operation
    switch (expr[0]) {
        case '+':
            return evalScheem(expr[1], env) +
                   evalScheem(expr[2], env);
        case 'set!':
        case 'define':
            env[expr[1]] = evalScheem(expr[2],env);
            return 0;
        case 'begin':
            var value=0;
            var len = expr.length;
            for (var i=1; i<len; i++) {
                value = evalScheem(expr[i],env);
            }
            return value;
    }
};
//console.log(evalScheem(['begin', 1, 'a', 3], {}));


// lesson 4.5 and 4.6

var evalScheem = function (expr, env) {
    // Numbers evaluate to themselves
    if (typeof expr === 'number') {
        return expr;
    }
    // Strings are variable references
    if (typeof expr === 'string') {
        return env[expr];
    }
    // Look at head of list for operation
    switch (expr[0]) {
        case '+':
            return evalScheem(expr[1], env) +
                   evalScheem(expr[2], env);
        case '<':
            if (evalScheem(expr[1], env) < evalScheem(expr[2], env))
                return '#t';
            return '#f';
        case 'set!':
        case 'define':
            env[expr[1]] = evalScheem(expr[2],env);
            return 0;
        case 'quote':
            return expr[1];
        case 'begin':
            var value=0;
            var len = expr.length;
            for (var i=1; i<len; i++) {
                value = evalScheem(expr[i],env);
            }
            return value;
    }
};


// lesson 4.7

var evalScheem = function (expr, env) {
    // Numbers evaluate to themselves
    if (typeof expr === 'number') {
        return expr;
    }
    // Look at head of list for operation
    switch (expr[0]) {
        case 'quote':
            return expr[1];
        case 'car':
            return evalScheem(expr[1])[0];
        case 'cdr':
            return evalScheem(expr[1]).slice(1);
        case 'cons':
            return [evalScheem(expr[1],env)].concat(evalScheem(expr[2],env));
    }
};
//console.log(evalScheem(['cons', 1, ['quote', [2, 3]]], {}));
//console.log(evalScheem(['car', ['quote', [[1, 2], 3, 4]]], {}));
//console.log(evalScheem(['cdr', ['quote', [[1, 2], 3, 4]]], {}));

