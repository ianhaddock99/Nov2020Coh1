
// //EVENT LOOP
// function display(data) {
//     console.log(data);
// }

// const futureData = fetch("https://twitter.com/veronica/tweets/");

//   futureData.then(display); // Attaches display functionality

// console.log("Me First");

// setTimeout(()=>{
//     console.log('inside of setTime Out');
// }, 0)




// function fib(n){
//     if(n<2){
//         return n
//     }
//     return fib(n-2) + fib(n-1)
// }
// // console.log(fib(30));

// // console.log('outside of set time out');


// //PROMISE
// let result = 0;

// let promise = new Promise((resolve, reject)=>{
    
//     if(true){
//         let result = fib(40);
//         resolve(result);
//     }
//     else{
//         reject('there was an error')
//     }
// });

// promise.then(fibResult=>{
//     console.log(fibResult);
//     return fibResult * 2
// })

// promise.then(mult2=>{
//     console.log(mult2);
// })

// promise.catch(error=>{
//     console.log(error);
// })

// console.log('hello world');


// let fetch = new Promise((resolve, reject)=>{

//     const request = new XMLHttpRequest(); //XHR Object

//     request.onreadystatechange = function(){
//         if(this.readyState === 4){
//             resolve(this.responseText)
//         }
//         else if(this.status === 40){
//             reject('error')
//         }
//     }

//     request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//     request.send()
// });

// fetch.then(response=>{
//     let resp = JSON.parse(response)
//     console.log("object", resp);
//     return resp;
// })

// fetch.then(data =>{
//     console.log(data);
// })

//PROMISE ALL MAKE SVERAL CALLS AT ONE TIME

// let arr = []

// let p1 = fetch('https://jsonplaceholder.typicode.com/photos')
// .then(result => result.json())
// .then(data =>{

// })

// let p1 = fetch('https://jsonplaceholder.typicode.com/photos');
// let p2 = fetch('https://jsonplaceholder.typicode.com/todos');

// Promise.all([p1, p2])

// .then(respArr =>{
//     let arr = [];
//     arr.push(respArr[0].json());
//     arr.push(respArr[1].json());
//     return Promise.all(arr);
// })

// .then(data =>{
//     console.log(data);

// })