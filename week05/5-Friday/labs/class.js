// var a = 4;
// var b = 1;



// const pi = 3.14;
// const arr = [1,2,3,4]

// for(let b = 3; b<=10; b++){

// }

// console.log(b);

// let name = 'Tiger';
// let age = 13;

// console.log(`My cat's name ${name}`);

// function letTest() {
//     let x = 31;
//     if (true) {
//       let x = 71;  // different variable
//       console.log(x);  // 71
//     }
//     console.log(x);  // 31
// }

// let arr = [1,3,5];
// let newArr = arr.map(el=>el + 1);

// obj dest

// let arr = [1,2,3,4];

// let [a,b,c,d] = [1,2,3,4]

// console.log(c);

// let luke = { occupation: 'jedi', father: 'anakin' };

// let {occupation, father} = luke;

// console.log(occupation, father);


// let a = 5;
// let b = 10;

// // if (b >a){
// //     console.log('a is less than b');
// // }

// a > b ? console.log('a is less than b') : console.log('a is greater than b');

// let str =  `this is my result ${a > b ? 4: 10}`
// console.log(str);



// let add = (x=0,y=0) => {
//     return x + y
// }

// console.log(add(5));

// let logArguments = (...args) => {
//     args.forEach(el =>{
//         console.log(el);
//     })
// }

// logArguments(5,6,7,8,9)




// const isUnique = (arr) => {
//     let cache = {};
//     let result = true;
//     for (let i = 0; i < arr.length; i++) {
//         if(cache[arr[i]]){
//             return false;
//         }
//         else{
//             cache[arr[i]] = true;
//         }

//     }
//     return result;
// };

// let arr1 = [1,2,2,3];

// console.log(isUnique(arr1));


// const uniqSort = function(arr) {
//     let cache = {}
//     let result = [];

//     for(let i=0; i < arr.length; i++){
//         if(!cache[arr[i]]){
//             result.push(arr[i]);
//             cache[arr[i]] = true;
//         }
//     }
//     result.sort((a,b)=>a-b)

//     return result;
//     // return arr.sort((a, b) => a - b);
// };

// let arr = [1,1,1,1,5,2,1,1,1,10];

// console.log(uniqSort(arr));

const cache = {};


const memoTimes10 = (n) => {
    if(n in cache){
        console.log("Fetching from cache", n);
        return cache[n];
    }
    else{
        cache[n] = n * 10;
        console.log("calculating results");
    }
    return cache[n]
}

memoTimes10(9)
memoTimes10(9)



