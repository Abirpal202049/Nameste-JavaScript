/*
TODO : falsy Value
undefined
null
0
''
NaN
Todo : truthy value
everything other than falsy value are truthy value
*/
var user = ''; // falsy value
if(user){
    console.log("It is true");
}

// use of == and === (Coercion) meaning:- Forcefully matching (number)2 and (string)"2"
// [== match the two number only by their value but , === mathch the two value not only by their value but also by their datatype]
var a = "02"; // Here 2 is string
if(a == 2){ // Here 2 is a number => Checking only the VALUE and not the TYPE
    console.log("The statement is correct  with ==");
}
if(a === 2){ // Checking both the TYPE and VALUE
    console.log("The statement is correct  with ===");
}


console.log(2 + "2"); // 22
console.log(5 - "2"); // 3
console.log(5 * "2"); // 10


// true = 1 , false = 0
console.log(true + 5); // 6
console.log(false + "5"); // false5
console.log(false + 5); // 5
console.log(null + 3); // 3
console.log(undefined + 13); // NaN