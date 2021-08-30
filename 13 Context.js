// How the flow of control goes in java script

// GLOBAL CONTEXT
sayhellow(); // Function Calling


// Defining Function
/*Whenever we define a function it get store in Global context so whenever we call that function from anywhere we doesnot encouter any error*/
function sayhellow(){
    console.log('Hellow');
}


// For browser this global context is 'window'
