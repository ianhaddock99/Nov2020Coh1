// console.log("inside of external js file");


// var name = "Veronica"; 
// name.length //length

// console.log('Joe');
// console.log('Jacob');
// console.log('Claude');

// var number = 4;
// var float = 4.1;

// var boolean = true;

// var name ="Ian"

// console.log(name);

// var b = "hello";

// console.log(b.length);

// var school = "Digital Crafts";

// console.log(school.indexOf(" "));

// true
// false

// !true
// !false

// var boolean = true;
// console.log(boolean);

// var not = !boolean;
// console.log(not);

// var and = boolean && false;
// console.log(and);

// var or = boolean || false;
// console.log(or);

// var equals = true == false;
// console.log(equals);



// var age = 19;

// if (age <= 18){
//     console.log("You can not drink");
// }
// else if(age >= 21){
//     console.log("You can drink");
// }
// else{
//     console.log("still not old enough to drink");
// }



// var expr = "Papayas";
// if(expr == 'Oranges')
// {
//     console.log('Oranges are $0.59 a pound.');
// }
// else if(expr == 'Mangoes')
// {
// }
// else if(expr == 'Papayas')
// {
//     console.log('Mangoes and papayas are $2.79 a pound.');

// }
// else
// {
//     console.log('Sorry, we are out of ' + expr + '.');
// }




// var count = 0;

// while (count < 10){
//     count ++;
//     console.log(count);
// }



// var count = 0;

// for (var count = 1; count <= 10; count++){
//     console.log(count);
// }


// var myArray = [5,7,8,2,5];
// console.log(myArray[1]);


// var myArray = [5,7,8,2,5];
// myArray.push(99);
// console.log(myArray);



// var myArray = [5,7,8,2,5];
// myArray[0] = "new number"
// console.log(myArray);


// var myArray = [5,7,8,2,5];
// myArray.pop();
// console.log(myArray);

// var myArray = [5,7,8,2,5];
// myArray.shift();
// console.log(myArray);

// var myArray = [5,7,8,2,5];
// myArray.unshift(99);
// console.log(myArray);

// var lottoNums = [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = lottoNums.splice(2, 1);
// console.log(arrayOfSplicedValues);
// console.log(lottoNums);

// var lottoNums = [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = lottoNums.splice(2, 3);
// console.log(arrayOfSplicedValues);
// console.log(lottoNums);

// var lottoNums = [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = lottoNums.slice(2, 3);
// console.log(arrayOfSplicedValues);

// let alph = "abcdefghijklmnopqrstuvwxyz";
// let chars = alph.split("");
// console.log(chars);

// var a ="6"

// var intA = parseInt(a);

// console.log(a + 3);


// let alph = "abcdefghijklmnopqrstuvwxyz";
// let chars = alph.split("");
// console.log(chars);

// let alph2 = chars.join("");
// console.log(alph2);



// var num = 12345;

// var reverse = num.toString().split("").reverse().join("");

// var rnum = parseInt(reverse);

// console.log(rnum);

// var words = 'oh hey how is it going'.split(' ');

// for(var i = 0; i < words.length; i++){
//     console.log(words[i]);
// }



//  GREEDY ALGORITHIM
// var coinTotal = 0;

// var coins = [25, 10, 5];
// var amount = 40;
// var index = 0;

// while(amount > 0){
//     if(coins[index] <= amount){
//         amount = amount - coins[index];
//         coinTotal++;
//     }
//     else{
//         index++;
//     }
// }

// console.log(coinTotal);

// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// }
// characterSheet["title"] = "Sir"
// console.log(characterSheet);


// var characterSheet = {};
// characterSheet['name'] = 'tim berners-lee';
// characterSheet['title'] = 'sir';
// characterSheet['powers'] = 'invent the web';
// console.log(characterSheet);


// function fname(){
//     console.log("a function was executed");
// }


// function add(num1, num2){
//         return num1 + num2;
// }

// var result = add(4,6)
// console.log(`The sum of the numbers result ${result}`);

/////////////////////HMWK//////////////////////////////

// function subtract(num1, num2){
//     return num1 - num2;
// }
// var x = subtract(10,4);
// console.log(`The difference of the numbers is ${x}`);



// function divide(num1, num2){
//     return num1 / num2;
// }
// var x = divide(10,2);
// console.log(x);

// function addtwo(num1){
//     return num1 += 2;
// }
// var x = addtwo(2);
// console.log(x);


// function madLib(name, subject) {
//     return `${name}'s favorite subject is ${subject}.`;
// }
// var x = madLib("Ian","History");
// console.log(x);



// function tipAmt(bill, service) {
//     if (service == "good") {
//         return bill * .20
//     }
//     else if(service == "fair"){
//         return bill * .15
//     }
//     else if(service == "bad"){
//         return bill * .10
//     }
// }
// var finalTip = tipAmt(100,"good");
// console.log(finalTip);


// function tipAmt(bill, service) {
//     if (service == "good") {
//         return bill * .20 + bill
//     }
//     else if(service == "fair"){
//         return bill * .15 + bill
//     }
//     else if(service == "bad"){
//         return bill * .10 + bill
//     }
// }
// var finalTip = tipAmt(100,"good");
// console.log(finalTip);

// function generateRange(min, max){
//     var arr = [];
//     for(var i = min; i <= max; i ++){
//         arr.push(i);
//     }
    
//     return arr;
// }
// var x = generateRange(1,10);
// console.log(x);

