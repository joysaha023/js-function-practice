// 12 inch 1 feet

// function inchToFeet(inch){
//     const feet = inch / 12;
//     const feetNumber = parseInt(feet);
//     const inchRemaining = inch % 12;
//     const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
//     return result;
// }

// const joyHeight = 75;
// const result = inchToFeet(joyHeight);
// console.log(result)

// function mileTokilometer (mile){
//     const kilo = mile * 1.60934;
//     return kilo;
// }
function mileTokilometer (kilo){
    const mile = kilo * 0.621371;
    return mile;
}

const numbr = 12;
const result = mileTokilometer(numbr);
console.log(result);