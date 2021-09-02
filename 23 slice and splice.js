var weeks = ["mon" ,"tue", "wed", "thus", "fri", "sat", "sun"];

console.log(weeks);


// Slicing an array => store the resultent array into a new array
let revisedWeeks = weeks.slice(2 , 5);
console.log(revisedWeeks); // [ 'wed', 'thus', 'fri' ]

console.log(weeks.slice(1 , 3)); // [ 'tue', 'wed' ]
console.log(weeks.slice()); // ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun']
console.log(weeks.slice(1)); // [ 'tue', 'wed', 'thus', 'fri', 'sat', 'sun' ]
console.log(weeks.slice(weeks.length-1)); // [ 'sun' ]
console.log(weeks.slice(weeks.length-2)); // [ 'sat', 'sun' ]


// weeks.splice(1 , 3, "Hi"); // [ 'mon', 'Hi', 'fri', 'sat', 'sun' ]
weeks.splice(2 , 2 , "Hey" , "Hi") // ['mon', 'tue', 'Hey', 'Hi', 'fri', 'sat', 'sun']
console.log(weeks); 