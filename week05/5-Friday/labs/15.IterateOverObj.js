
/*
Create a function sumObjectValues() that will sum all values of the fields that contain
number.  
Ensure that iteration is done only over own properties of the object
*/

<<<<<<< HEAD
// var nums = {
//     a: 10,
//     b: 20,
//     c: "string",
//     d: 12
// }

// // Write code here 
//42
// console.log(sumObjectValues(nums));

function sumObjectValues(obj){
    let sum = 0;
    for (let key in obj){
        if (typeof(obj[key]) == "number"){
            sum += obj[key];
        } 
        
    } 
    return sum;
}
console.log(sumObjectValues(nums));
// 42
        
    



// let arr = [1,2,3,4]

// for(let i of arr){
//     console.log(i);
// }


// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// for(let key in obj){
//     let value = obj[key];
//     console.log(key);
// }
=======
var nums = {
    a: 10,
    b: 20,
    c: "string",
    d: 12
}

// Write code here 

console.log(sumObjectValues(nums));
// 42
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877
