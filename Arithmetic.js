const UserInput = require('./UserInput')
exports.performOneArithmeticCalculation = function() {
    const operator = UserInput.get_str_input_with_prompt('Please enter an operator:');
    const operands = UserInput.get_num_input_with_prompt('Please enter the number of operands:');
    var arr = Array(operands);
    for (var i = 0; i < operands; i++) {
        var arg = UserInput.get_num_input_with_prompt(`Please enter number ${i + 1}:`);
        while (isNaN(arg)){
            arg = UserInput.get_num_input_with_prompt('Please only enter numbers:');
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
        arr = arr.filter(function(number) {return number != 0})
        var total = arr.reduce(function(accumulator, currentValue) { return accumulator / currentValue; });
        console.log(`The answer is ${total}`);
    } else {
        throw 'The operator entered was not valid'
    }
    return 1
}