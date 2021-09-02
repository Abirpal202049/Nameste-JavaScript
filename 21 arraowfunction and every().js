// Arrow Function and Callback

function isEven(element){
    /* if(element % 2 == 0){
        return true;
    }
    return false */

    return element%2 === 0;
}

// function in a variable
// var isEve = function(element){

// }


var isEve = (element) =>{
    // element % 2 === 0;
    return element % 2 === 0;

}

console.log(isEven(12));
console.log(isEve(3)); // if we dont return it gives us 'undefined'

/*
Call back functionv :- (()=>{return ...}) or (()=>())
    let result = [2 , 8 , 6 , 4].every(isEve); // Perform the operation on each and every element of the array
    console.log("Overall Result : ",result);


If 'return' statement is not present then dont use Curly Braces {}
*/


// Without curly braces and return keyword 
let result = [2 , 8 , 12 , 4].every((e) => (e % 2 === 0) ); // Perform the operation on each and every element of the array using call-back function
console.log("Overall Result : ",result);



let newarr = [7 , 5 , 6 , 2].every((e) => {
    return e === e * 2;
}) // Retuen type of 'every' method is boolean (true / false)
console.log(newarr);
