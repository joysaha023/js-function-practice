const nowFrnd = ["joy", "roy", "toy", "khoy", "roy", "toy", "joy", "boy"];


function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(nowFrnd);
console.log(uniqueArray);