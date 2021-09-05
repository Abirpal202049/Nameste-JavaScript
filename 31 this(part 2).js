// In Node we get Empty Object '{}' when we write "this" in Global Context
// In Browser we get Window Object 'window' when we write "this" in Global Context

// Todo : For all regular function calls, this points to 'window' Object
console.log(this);


var user = {
    firstname : "Abir",
    courseCount : 4,
    getCourseCount : function(){
        console.log("Line 12 : " , this);

        // Regular Function
        function hello(){
            console.log("Hello");
            console.log("LINE 15" , this);
        }
        hello(); // Regular Function call
    }
};

user.getCourseCount(); // Object Call
console.table(user);



// REGULAR FUNCTION CALL
// function sayHellow(){
//     console.log("Hello");
// }
// sayHellow(); // regular function call