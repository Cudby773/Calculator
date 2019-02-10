const readline = require('readline-sync');

var welcome_message = function() {
    console.log('Welcome to the calculator!');
    console.log('--------------------------')
}

var get_input = function() {
    const inputstr = readline.prompt();
    const inputnum = +inputstr;
    return inputnum
}

var perform_calculation = function() {
    console.log('Do you wish to perform a cacluation? Enter y or n');
    var exit = readline.prompt();
    if (exit === 'n'){
        return 0
    }
    else if (exit === 'y'){
    }
    else {
        console.log('Please enter y or n');
    }
    console.log('Please enter an operator:');
    const operator = readline.prompt();
    console.log('Please enter the number of operands:');
    const operands = get_input();
    var arr = Array(operands);
    for (var i = 0; i < operands; i++) {
        console.log('Please enter some input:');
        var arg = get_input();
        while (isNaN(arg)){
            console.log('Please enter a number:');
            arg = get_input();
        }
        arr[i] = +arg;
    }
    if (operator == '+') {
        var total = arr.reduce(function(accumulator, currentValue) { return accumulator + currentValue; });
        console.log('The answer is ' + total);
    } else if (operator == '-') {
        var total = arr.reduce(function(accumulator, currentValue) { return accumulator - currentValue; });
        console.log('The answer is ' + total);
    } else if (operator == '*') {
        var total = arr.reduce(function(accumulator, currentValue) { return accumulator * currentValue; });
        console.log('The answer is ' + total);
    } else if (operator == '/') {
        var total = arr.reduce(function(accumulator, currentValue) { return accumulator / currentValue; });
        console.log('The answer is ' + total);
    } else {
        console.log('This operator is not supported')
    }
    return 1
}
welcome_message();
var x = perform_calculation();
while (x != 0) {
    x = perform_calculation();
}
