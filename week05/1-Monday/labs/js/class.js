// function add(a,b){

//     var result = a + b
// }

// var addResult = add(4,5);

// (function greetintg(name1, name2){
//     console.log(`hello ${name1} ${name2}`);

// })(["Andrea", "Adam"])

// var a = 6;

// var b = a;

// console.log(a,b);

// b = 10;

// console.log(a,b);

// var x = 1;

// if (x === 1){
//     x = 2;
//     console.log(x);
// }
// console.log(x);



// var arr = [1 ,2 ,3, 4, 5, 6]

// arr.forEach(function(val){
//     console.log(val);
// })

// var arr = [1,2,3,4,5,6];
// var newArr = arr.map(function(num){
//     return num * 3;
// })

// console.log(newArr);

var students = ["Ian", "Jope", "Ver", "Ble"];

// var greetingArr = students.map(function(student){
//     return `Hello ${student}`
// })

// console.log(greetingArr);


// var newStudents = students.filter(function(student){
//     return student != "Ian"
// })

// console.log(newStudents);

var arr = [4,8,9,10,5,7,1];

// var eitherTrueOrFalse = arr.some(function(num){
//     return num > 11
// })

// console.log(eitherTrueOrFalse);


var sum = arr.reduce(function(acc, currentVal){
    return acc + currentVal
})

console.log(sum);