// function multiplyFourNum(a, b, c, d){
//     var result = a * b * c * d;
//     return result;
// }
// var num1 = 3;
// var num2 = 5;
// var num3 = 8;
// var num4 = 7;

// var result = multiplyFourNum(num1, num2, num3, num4)
// console.log("result", result);


////////////////////// Task 2 /////////////////////


function takeNumber(numbers){
    if(numbers % 2 === 1){
        return numbers * 2;
    }
    else{
        return numbers / 2;
    }
}
let numbers = 4;
let result = takeNumber(numbers);
console.log("result :", result);