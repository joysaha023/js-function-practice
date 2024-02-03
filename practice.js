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


// function takeNumber(numbers){
//     if(numbers % 2 === 1){
//         return numbers * 2;
//     }
//     else{
//         return numbers / 2;
//     }
// }
// let numbers = 4;
// let result = takeNumber(numbers);
// console.log("result :", result);

////////////////// Task 3 //////////////////////////

// function make_avg(myArr, size){
//     if(size === 0 || myArr.length === 0){
//         return 0;
//     }

//     let sum = 0;
//     for(let i = 0; i < size; i++){
//         sum = sum + myArr[i];
//     }
    
//     let average = sum / size;
//     return average;
// }

// let arr = [34, 44, 91, 20, 47, 65];
// let arrSize = arr.length;

// let result = make_avg(arr, arrSize);
// console.log("result", result);

/////////////////////// Task 4 //////////////////////

function count_zero(string1){
    let reg = /[0]/gi;
    let test = string1.match(reg);
    let char = test.length;
    return char;
}

let binaryString = "110101001010";

let result = count_zero(binaryString);
console.log("Number of 0 is: ", result)


///////////////////// task 5 //////////////////

// function odd_even(num1){
//     if(num1 % 2 === 1){
//         return "odd";
//     }
//     else{
//         return "even";
//     }
// }

// let numbers = 91;

// let result = odd_even(numbers);
// console.log("result :", result);