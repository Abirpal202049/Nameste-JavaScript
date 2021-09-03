/* For of loop & For In Loop
    for-of loop => Array
    for-in loop => Objects
*/


// for-of loop
console.log("For-of Loops in Array");
const names = ["Youtube" ,"Instagram", "Netflix", "Flipkart", "Amazon"];
for(const val of names){
    console.log(val);
}


// for-in loop
console.log("For-in Loops in Objects");
const symbols = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "Facebook",
    tw : "Twitter"
};
for(const n in symbols){ // 'n' will give the keys of the Object
    console.log(`Key is ${n} and the Value is ${symbols[n]}`);
}