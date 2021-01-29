let inputArray = [1,2,3,4];
let outputArray = [];
let sum = 0;

for(var i in inputArray){
    sum = sum + inputArray[i];
    outputArray.push(sum)
}

console.log(outputArray);