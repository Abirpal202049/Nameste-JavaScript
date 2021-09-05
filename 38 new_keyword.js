// Other ways of creating Object
var User = function(firstName , courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getcourseCount = function(){
        console.log(`Course count is : ${this.courseCount}`);
        console.log(this);
    };

}


var hitesh = new User("Hitesh" , 2); // Not a regular function call
console.log(hitesh);
console.table(hitesh)

// Creating ne wuser using constructor
var sam = new User("Sam" , 8);
sam.getcourseCount();