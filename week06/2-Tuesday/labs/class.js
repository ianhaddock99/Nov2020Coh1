// const request = new XMLHttpRequest(); //XHR OBJECT
// request.onreadystatechange = function(){ //EVENT LISTENER
//     if(this.readyState === 4){
//         // console.log(this.response);

//         let data = JSON.parse(this.responseText) //TAKES STRING AND CONVERTS INTO OBJECT
//         console.log(data);
//     }
// };
// request.open("GET","https://jsonplaceholder.typicode.com/todos");

// request.send()

// let result = fetch("https://jsonplaceholder.typicode.com/todos");

// console.log(result);

// let fib = (n) => {
//     if (n<2){
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
// }

// console.log(fib(10));



// let sum = 10;

// for(let i=0; i< 10; i++){
//     sum += i;
// }

// console.log(sum);

//ASYNCRONOUS FUNCTION

// console.log('before timeout');

// setTimeout(()=>{
//     console.log('inside timeout');
// }, 1000)

// console.log('outside of timeout');