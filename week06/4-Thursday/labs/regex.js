
//TEST

// let pat = /long/;

// let result = pat.test('Today is a great day')

// console.log(result);

//EXEC
// let pat = /long/;

// let result = pat.exec('Today is a great day')

// console.log(result);


//MATCH
// let pat = /e/g;

// let str = 'The best things in life are free';
// let arr = str.match(pat)
// console.log(arr);

//REPLACE
// let city = "Houston Seattle Tampa houston".replace(/Houston|Seattle/gi, "Atlanta")
// console.log(city);


// let pattern = /Batman|Tina Fey/;
// let str = "Batman and Tina Fey.";
// // let result = pattern.exec(str);
// //or
// let result = str.match(pattern);
// console.log(result);



//GROUPING WITH PARANTHESIS
// let pat = /(\d\d\d)-(\d\d\d-\d\d\d\d)/

// let str = "My phone number is 333-321-9334"

// let result = str.match(pat);
// console.log(result);



//GROUPING WITH PIPE SYMBOL
// let pattern = /Bat(man|mobile|copter|bat)/;
// let str = "Batman lost a wheel";
// let result = str.match(pattern);

// console.log(result);

//OPTIONAL MATCHING WITH QUESTION MARK

// let pattern = /Bat(wo)?man/;
// let str = "The Adventures of Batwoman";
// let result = str.match(pattern);
// console.log(result);

// let pattern = /(\d\d\d)?-(\d\d\d-\d\d\d\d)/;
// let str = "My phone number is 333-321-9334";
// let result = str.match(pattern);
// console.log(result);

//MATCHING ZERO OR MORE WITH STAR

// let pattern = /Bat(wo)*man/;
// let str1 = "The Adventures of Batman";
// let str2 = "The Adventures of Batwoman";
// let str3 = "The Adventures of Batwowowowoman";
// let result = str3.match(pattern);
// console.log(result);

//MATCHING WITH ONE OR MORE WITH PLUS

// let pattern = /Bat(wo)+man/;
// let str1 = "The Adventures of Batman";
// let str2 = "The Adventures of Batwoman";
// let str3 = "The Adventures of Batwowowowoman";
// let result = str1.match(pattern);
// console.log(result);