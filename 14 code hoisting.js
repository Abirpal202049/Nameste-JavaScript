// Context in Js
/* 
There are 2 type of context -> 
    1. Global Execution Context  (Global Context)
    2. Execution Context   (Functional Execution Context)

    The execution context are stacked one above another and this stack is called 'CALL STACK'

    a. Variable Object
    b. Scope Chain
    c. this
As the job of the execution context is done it just go away
*/

var num = 2;

function sayMe(){
    console.log("Say Hey");
}
sayMe();