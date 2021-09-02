// Fill and Filter Array Method


// Fill Method
var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

// testArray.fill("Hi" , 2 , 4); // It changes the actual array
// console.log(testArray);
console.log(testArray.fill("h", 2, 5)); // (thing tofill , starting_position , end_position[exclusive])
console.log(testArray.fill("empty"));



// Filter method 
const mynumber = [11, 22, 33, 44, 55, 66, 77, 88, 99];

const result = mynumber.filter((num) => (num != 55)) // Its create a new array
console.log(result);
const result1 = mynumber.filter((num) => (num < 55))
console.log(result1);
const result2 = mynumber.filter((num) => (num >= 55))
console.log(result2);