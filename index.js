const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('--------------------------')
console.log('Please enter an operator:');
const operator = readline.prompt();
console.log('Please enter some input:');
const FirstArg = readline.prompt();
const num1 = +FirstArg;
console.log('Please enter some input:');
const SecondArg = readline.prompt();
const num2 = +SecondArg;

if (operator == '+') {
    sum = num1 + num2;
    console.log('The answer is ' + sum);
} else if (operator == '-') {
    diff = num1 - num2;
    console.log('The answer is ' + diff);
} else if (operator == '*') {
    mult = num1 * num2;
    console.log('The answer is ' + mult);
} else if (operator == '/') {
    ratio = num1 / num2;
    console.log('The answer is ' + ratio);
} else {
    console.log('This operator is not supported')
}