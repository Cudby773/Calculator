const readline = require('readline-sync');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';
 
var getCalculationMode = function() {
    console.log(`Which calculator mode do you want?
    1) Arithmetic
    2) Vowel Counting`)
    var mode = get_str_input();
    return mode
}

var welcome_message = function() {
    console.log('Welcome to the calculator!');
    console.log('--------------------------')
}

var get_num_input = function() {
    const inputstr = readline.prompt();
    const inputnum = +inputstr;
    return inputnum
}

var get_str_input = function() {
    const inputstr = readline.prompt();
    return inputstr
}

var performOneArithmeticCalculation = function() {
    console.log('Please enter an operator:');
    const operator = readline.prompt();
    console.log('Please enter the number of operands:');
    const operands = get_num_input();
    var arr = Array(operands);
    for (var i = 0; i < operands; i++) {
        console.log(`Please enter number ${i + 1}:`);
        var arg = get_num_input();
        while (isNaN(arg)){
            console.log('Please only enter numbers:');
            arg = get_num_input();
        }
        arr[i] = +arg;
    }
    if (operator == '+') {
        var total = arr.reduce(function(accumulator, currentValue) { return accumulator + currentValue; });
        console.log(`The answer is ${total}`);
    } else if (operator == '-') {
        var total = arr.reduce(function(accumulator, currentValue) { return accumulator - currentValue; });
        console.log(`The answer is ${total}`);
    } else if (operator == '*') {
        var total = arr.reduce(function(accumulator, currentValue) { return accumulator * currentValue; });
        console.log(`The answer is ${total}`);
    } else if (operator == '/') {
        var total = arr.reduce(function(accumulator, currentValue) { return accumulator / currentValue; });
        console.log(`The answer is ${total}`);
    } else {
        console.log('This operator is not supported')
    }
    return 1
}

var performOneVowelCountingCalculation = function() {
    console.log(`Please enter a string`);
    var input_string = get_str_input(), answer = new Object();
    answer.string = input_string;
    answer.vowel_count = function(x) {
    answer.acount = 0;
    var ecount = 0, icount = 0, ocount = 0, ucount = 0;
        for (let i of x) {
            if (i === 'a' || i === 'A'){
                answer.acount += 1;
            }
            else if (i === 'e'|| i === 'E'){
                ecount += 1;
            }
            else if (i === 'i'|| i === 'I'){
                icount += 1;
            }
            else if (i === 'o'|| i === 'O'){
                ocount += 1;
            }
            else if (i === 'u'|| i === 'U'){
                ucount += 1;
            }
        }
        var arr = new Array(answer.acount, ecount, icount, ocount, ucount);
        return arr
    }
    var count_arr = answer.vowel_count(answer.string);
    console.log(`The vowel counts are:
    A: ${count_arr[0]}
    E: ${count_arr[1]}
    I: ${count_arr[2]}
    O: ${count_arr[3]}
    U: ${count_arr[4]}`);
    return 1
}

var x = 1;
welcome_message();
while (x === 1) {
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
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
      var x = performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
      var x = performOneVowelCountingCalculation();
    }
    else {
        console.log(`Please enter 1 or 2`)
    }
}


