var name = ['Abir' , 'Rupam' , 'Saikat' , 'Soumyajit'];
// Index      0         1         2           3


// Other way of declearing array
var states = new Array("West Bengal" , "Rajasthan" , "Delhi" , "Maharastha" , "Karnataka");
console.log(states);



// Array Indexing
console.log(states[2]);



// Array Length
console.log("Length of the arrray :- ", states.length );



// Replacing a value in the array by other value
states[3] = "Assam";
console.log("Replacing elements of the array :- ",states);



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