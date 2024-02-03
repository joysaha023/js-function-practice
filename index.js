// Objective: write a function to give me the sum of all number in an array
//  1. declare a function
//  2. call check whether the function is called properly
//  3. set a parameter(s)
//  4. pass the parameter(s), check whether parameter is passed in a proper format.


// function sumOfNumber(numbers){
//     let sum = 0;
//     for(const number of numbers){
//         console.log(number);
//         sum = sum + number;
//     }
//     return sum;
// }

// const numbs = [54, 62, 12, 6];
// const sum = sumOfNumber(numbs);
// console.log('sum of numbers is', sum);

function evenNumbersOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number)
        }
    }
    return evens;
}

const numbers = [5, 8, 91, 24, 6];
const evens = evenNumbersOnly(numbers);
console.log('even pnums: ', evens);