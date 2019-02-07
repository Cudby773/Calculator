const readline = require('readline-sync');
console.log('Welcome to the calculator, Josh!');
console.log('Please enter some input:');
const response = readline.prompt();
num1 = response;
num1 = +num1;
console.log('Please enter some input:');
const response2 = readline.prompt();
num2 = response2;
num2 = +num2;
mult = num1*num2;
console.log(mult)