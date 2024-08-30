const repeatString = function(theString, number) {
    let answer = ""
    for (let i = 0; i < number; i++){
        answer += theString;
    }

    if (number < 0){
        return "ERROR"
    }
    
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
