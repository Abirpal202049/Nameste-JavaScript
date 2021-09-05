// Chaining Of Prototype
// New ways of creating Object
var User = function(firstName , courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getcourseCount = function(){
        console.log(`Course count is : ${this.courseCount}`);
    };

}

User.prototype.getName = function(){
    console.log(`Your name is : ${this.firstName}`)
}


var hitesh = new User("Hitesh" , 2); 
hitesh.getcourseCount();

// hitesh.prototype.hasOwnProperty => THIS IS WRONG
// hitesh.hasOwnProperty => THIS IS CORRECT


if(hitesh.hasOwnProperty("firstName")){ // Checking weather the property is Present or not first then it  will proceed otherwise not
    hitesh.getName();
}else{
    console.log(`property not present`);
}


var sam = new User("Sam" , 8);
sam.getcourseCount()
sam.getName()

Array.prototype.even = function(){
    console.log("This is array");
}