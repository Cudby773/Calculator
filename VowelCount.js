const UserInput = require('./UserInput')
exports.performOneVowelCountingCalculation = function() {
    var input_string = UserInput.get_str_input_with_prompt(`Please enter a string`), answer = new Object();
    answer.string = input_string;
    answer.vowel_count = function(x) {
        answer.acount = 0, answer.ecount = 0, answer.icount = 0, answer.ocount = 0, answer.ucount = 0;
        for (let i of x) {
            if (i === 'a' || i === 'A'){
                answer.acount += 1;
            }
            else if (i === 'e'|| i === 'E'){
                answer.ecount += 1;
            }
            else if (i === 'i'|| i === 'I'){
                answer.icount += 1;
            }
            else if (i === 'o'|| i === 'O'){
                answer.ocount += 1;
            }
            else if (i === 'u'|| i === 'U'){
                answer.ucount += 1;
            }
        }
        var arr = new Array(answer.acount, answer.ecount, answer.icount, answer.ocount, answer.ucount);
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
