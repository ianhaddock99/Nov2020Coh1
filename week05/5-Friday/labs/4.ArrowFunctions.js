// ***Write these functions with  Arrow Functions

function mult(a, b) {
    return a * b;
}

let mult = (a,b) => a * b;



setTimeout(function () {
    console.log(mult(5, 10));
}, 1000)

setTimeout(() => {
    console.log(mult(5, 10));
}, 1000)



