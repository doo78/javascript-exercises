const reverseString = function(str) {
    if (str.length == 0){
        return "";
    }

    let answer = "";
    for (let i = 0; i < str.length + 1; i++){
        answer += str.slice(str.length - i, str.length - i + 1);
    }
    
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
