sayHellow(); // This feature is called Hoisting in javascript
// [Global Execution Context] In JavaScript

/* How the (Global Execution Context) or (Functional Execution Context) Works ?

Both the execution context are created in 2 phases

    1. Memory creation phase
        a. Variable decleration are scanned and made 'undefined'
        b. Function decleration are scanned and are made available

    2. Code execution phase
        (In code execution phase values are assinged to the variable)

    After the execution context is done with its work the Execution Context is deleted

*/


/*
When the [Global Execution Context] is created a [Global Object] => '(windows' object) is also Created at the same time
*/

function sayHellow(){
    console.log("Hello");
}

// sayHellow()


if(2 === "2"){
    console.log("This is true");
}else{
    console.log("This is false");
}


var myname = "Abir";
if(myname === myname){
    console.log("This is true statement");
}
/* if(myname === window.myname){ // This shows an error that window is not defined
    console.log("This is true statement");
} */

// Here the (global executiuon context) is not 'window' since it is executing on Node and not on any Browser
