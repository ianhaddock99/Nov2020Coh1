//#1 POSITIVE NUMBERS

// var arr = [-3,-2,-1,0,1,2,3]

// var newArr = arr.filter(function(num){
//     return num >= 0
// })

// console.log(newArr);

//#2 EVEN NUMBERS

// var arr = [1,2,3,4,5,6,7,8,9,10]

// var newArr = arr.filter(function(num){
//     return num % 2 === 0;
// })

// console.log(newArr);

//#3 SQUARE THE NUMBERS

// var arr = [1,2,3,4,5,6,7,8,9,10]

// var newArr = arr.map(function(num){
//     return Math.pow(num,2);
// })

// console.log(newArr);

//#4 CITIES 1 

// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// var temp = cities.filter(function(obj){
//     return obj.temperature < 70;
// })

// console.log(temp);

//#5 CITIES 2

// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// var names = cities.map(function(obj){
//     return obj.name;
// })

// console.log(names);

//#6 GOOD JOB!

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var newPeople = people.map(function(name){
//     return `Good Job, ${name}!`
// })

// console.log(newPeople);


//#7 SORT AN ARRAY

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// people.sort(function(a,b){
//     return a.localeCompare(b);
// })

// console.log(people);

//#8 SORT AN ARRAY 2

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// people.sort(function(a, b){
//     return a.length - b.length;
// });

// console.log(people);

//#9 SORT AN ARRAY 3

// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6] ];

// var newArr = arr.sort(function(a, b) {
//     return b[0] - a[0];
// });
// console.log(newArr);

//#10 3 TIMES

// function fun(){
//     console.log("Hello World");
// }

// function callthreetimes(newfun){
//     newfun();
//     newfun();
//     newfun();
// }
// callthreetimes(fun);

//#11 

// function helloworld(num, text) {
//     if (num > 0) {
//         console.log(text);
//         helloworld(num - 1, text);
//     }
// }

// var text = 'Hello World';
// helloworld(10, text);

//#12 SUM AN ARRAY

// var sum = [0, 1, 2, 3]

// var newSum = sum.reduce(function (acc, curVal) {
//     return acc + curVal
// }, 0)

// console.log(newSum);

//#13 ACRONYM


// function acronym(text) {
//     return text
//     .split(" ") // splits the array at one single space character.
//     .reduce(function(accumulator, word) {
//         return accumulator + word.charAt(0);
//     }, "");
// }

// console.log(acronym('Laugh Out Loud'));
