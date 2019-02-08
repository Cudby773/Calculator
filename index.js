const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('--------------------------')
console.log('Please enter an operator:');
const operator = readline.prompt();
console.log('Please enter the number of operands:');
const operands = readline.prompt();
var arr = Array(operands);
for (var i = 0; i < operands; i++) {
    console.log('Please enter some input:');
    var arg = readline.prompt();
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