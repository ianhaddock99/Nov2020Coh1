/*

Check the presence of the function parameters 

Throw Error when function square() is called without arguments.

Create new function and use it as a default parameter. 

*/

function square(a) {
    console.log(a * a);
}

square(10)
// 100 

square();
//BEFORE: NaN
//AFTER: Uncaught Error: Function square requrires an agrument

<<<<<<< HEAD


let add = (a=0,b=0) => {
    return a + b
}

console.log(add(4));
=======
>>>>>>> 33954064214238bf058d493bb79e445aaa71d877
