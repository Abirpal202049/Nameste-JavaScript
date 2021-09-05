// Newff ways of creating Object
var User = function(firstName , courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getcourseCount = function(){
        console.log(`Course count is : ${this.courseCount}`);
        // console.log(this);
    };

}

// If we want to insert our own property or function or Variable in the User Object from outside User Object then we use 'prototype'
// ObjectName.prototype
User.prototype.getName = function(){
    console.log(`Your name is : ${this.firstName}`)
}
// Todo : Property just like variable


var hitesh = new User("Hitesh" , 2); // Not a regular function call
hitesh.getcourseCount();
hitesh.getName()

// Creating ne wuser using constructor
var sam = new User("Sam" , 8);
sam.getcourseCount()
sam.getName()