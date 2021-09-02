// Array , Object AND loops are Super important 

var name = ['Abir' , 'Rupam' , 'Saikat' , 'Soumyajit'];
// Index      0         1         2           3


// Other way of declearing array
var states = new Array("West Bengal" , "Rajasthan" , "Delhi" , "Maharastha" , "Karnataka"); // Creating a new Array Object
console.log(states);



// Array Indexing
console.log(states[2]);



// Array Length
console.log("Length of the arrray :- ", states.length );
console.log("Last element of the arrray :- ", states[states.length-1] );



// Replacing a value in the array by other value
states[3] = "Assam";
console.log("Replacing elements of the array :- ",states);


// Iterating an array through foreachloop 
states.forEach((value) => {
    console.log("Element - " , value);
});


var user = ["Abir Pal" , "abirpal282002@gmail.com" , 3 , 34 ,true]; // Not a good data structure rather we can use 'Object'
console.log(user);



// Remove element from the end of the array
user.pop()
console.log(user);



// Adding new element to end of the array
user.push('Rakesh Junjunbala');
console.log(user);



// Remove element from the start of the array
user.shift();
console.log(user);



// Adding new element to the start of the array
user.unshift("Krishnendu Das");
console.log(user);


// Find the index through the array element
console.log(user.indexOf('Rakesh Junjunbala')); // if the element is present in the array it returns its index

console.log(user.indexOf('Abir')) // If the element is not present in the array it return -1




// Converting any data type to array
console.log(Array.from(`This is new to me ${user[0]}`)); // String to Array



// Slicing an Array
let items = ["Strawberry", "Banana", "Mango" , 'Turnip', 'Radish', 'Carrot'];
let pos = 1;
let vegetables = items.splice(3 , 3) // .splice(position , no_of_items)
console.log("Removed items" , vegetables);
console.log("Remaining items" , items);




// Copying an array
let fruits = items.slice();
console.log("Copyed to array named fruits " , fruits);



// Getting the keys of the arrays means their index number which cointain elements
fruits[6] = "Orange"
console.log(Object.keys(fruits));




// Increasing the array size
fruits.length = 10;
console.log("Array with it's increased size : ",fruits);
console.log(fruits.length);
console.log(fruits[8] , fruits[23]);





// TODO : Reacap To Some Less Used Function and Object
let a = Array(12 , 34 , 67); // Creating a new Array Object

console.log(a);
let d = Array.from("This"); // Creates a new Array instance from an array-like or iterable object.
console.log(Array.isArray(d)); // Check weather it is array or not
console.log(d); 
