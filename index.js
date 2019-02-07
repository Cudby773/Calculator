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

switch (operator) {
    case '+':
        sum = num1 + num2;
        console.log('The answer is ' + sum);
        break;
    case '-':
        diff = num1 - num2;
        console.log('The answer is ' + diff);
        break;
    case '*':
        mult = num1 * num2;
        console.log('The answer is ' + mult);
        break;
    case '/':
        ratio = num1 / num2;
        console.log('The answer is ' + ratio);
        break;
    default:
        console.log('This operator is not supported')
}