// function isLeapyear(year){
//     if(year % 4 === 0 ){
//         return true
//     }
//     else{
//         return false;
//     }
// }

// const result = isLeapyear(2020);
// console.log(result);

function isLeapyear2(year) {
    if(year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLeap = isLeapyear2(2100);
const isLeap2 = isLeapyear2(2400);
const isLeap3 = isLeapyear2(1900);
const isLeap4 = isLeapyear2(2052);

console.log(isLeap, isLeap2, isLeap3, isLeap4);