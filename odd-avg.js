function odd_avg(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }

    const count = odds.length;
    const avarag = sum / count;
    return avarag;
}

const arrayAll = [52, 45, 93, 15, 41, 56, 12];
const result = odd_avg(arrayAll);
console.log("sum of the num: ", result);