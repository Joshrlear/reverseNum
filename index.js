
// create a function that converts to string > splits into array >
// sorts in reverse > joins array making string
function reverseNum(num){
    let revNum = num.toString().split('').reverse().join('');

    
    // convert back to number
    let result = Number(revNum);

    
    // if 'num' value is not a number after the Number conversion
    // then console.log custom message
    return isNaN(result)
    ? console.log("This is not a number")
    : console.log(result);
}