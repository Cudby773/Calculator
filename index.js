
const UserInput = require('./UserInput')
const Arithmetic = require('./Arithmetic')
const VowelCount = require('./VowelCount')

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';
 
var getCalculationMode = function() {
    var mode = UserInput.get_str_input_with_prompt(`Which calculator mode do you want?
    1) Arithmetic
    2) Vowel Counting`);
    return mode
}

var welcome_message = function() {
    console.log('Welcome to the calculator!');
    console.log('--------------------------')
}


var x = 1;
welcome_message();
while (x === 1) {
    var exit = UserInput.get_str_input_with_prompt('Do you wish to perform a cacluation? Enter y or n');
    while (exit != 'y' && exit != 'n') {
        exit = UserInput.get_str_input_with_prompt(`Please enter y or n`)
    }
    if (exit === 'n'){
        return 0
    }
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
      var x = Arithmetic.performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
      var x = VowelCount.performOneVowelCountingCalculation();
    }
    else {
        console.log(`Please enter 1 or 2`)
    }
}


