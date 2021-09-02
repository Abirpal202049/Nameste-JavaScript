// For loop , break , continue , Looping through array

for (let j = 0; j < 10; j += 2) {
    console.log(`Element ${j + 1} - ${j}`);
}

// Looping through an array
console.log("Looping through the array : ");
const a = new Array(1, 5, 4, 3, 6, 2, 7, 9);
for (let i = 0; i < a.length; i++) {
    const ele = a[i];
    console.log(ele);
}


const state = [
    "West Bengal",
    "Rajasthan",
    "Karnataka" , 
    "Panjab",
    "Madha Pradesh",
    1947,
    "Maharashtra",
    "Assam"
]

// console.log(state);
// const mystate = state.filter((ele)=>{ // We can do using filter method also
//     return (typeof(ele) != "number")
// })
// console.log(mystate);


for (let i = 0; i < state.length; i++) {
    if(typeof state[i] == 'number') continue;
    console.log(state[i]);
    
}