const readline = require('readline-sync');

exports.get_num_input_with_prompt = function(prompt) {
    console.log(prompt)
    const inputstr = readline.prompt();
    const inputnum = +inputstr;
    return inputnum
}

exports.get_str_input_with_prompt = function(prompt) {
    console.log(prompt)
    const inputstr = readline.prompt();
    return inputstr
}