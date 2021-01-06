// ***Rest Operator
//Assign values to the a, b, c variables using destructuring and rest operator

// var a, b, c;
// var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(a);
// // 1
// console.log(b);
// //2

// console.log(c);
// //[3, 4, 5, 6, 7]

let sum = (...args) => {

    if(args.length === 0) return 0;
    if(args.length === 1) return args[0];
    let sum = 0;
    sum = args.reduce((acc, elem) => acc + elem, 0)
    return sum;
}

let result = sum(5);
console.log(result);

