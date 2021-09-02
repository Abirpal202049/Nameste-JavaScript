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


// ForEach is actually an Array Method 
// state.forEach(state => console.log(state))

state.forEach((value) =>{
    if(typeof(value) == "string"){
        console.log(value);
    }
})


// TODO : Question 
var i = 0 ;
for(;;){
    if(i > 3) break;
    console.log(i);
    i++;
}