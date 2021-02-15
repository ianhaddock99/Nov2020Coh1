// function add(){
//     let x = 1;
//     let y = 2;

//     function f(){

//         setTimeout(()=>{
//             console.log(x + y); 
//         }, 10000)
//         return x + y 
//     }

//     f();
//     console.log('add function has completed');

//     return;
// }

// add();

// console.log('add function has completed');


// let result = (function(x,y){
//     console.log(x + y)
//     return x + y
// })(3, 4)


// console.log(result)


// let $ = (()=>{

//     const pi = 3.14;

//     function multPi(multiplier){
//         return pi * multiplier
//     }

//     let $ = {
//         multiplyPi: multPi
//     }


//     return $
// })()


// console.log($.multiplyPi(5));




// const times10 = (n) =>  n * 10

// const cache = {};

// const memoTimes10 = (n) => {
//     console.log('fetching data from cache:', n)
//     return cache[n]
// }
// else{

// }

// }