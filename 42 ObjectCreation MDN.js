// Object.create()
var User = {
    name : "",
    getUsernName : function(){
        console.log(`User name is : ${this.name}`);
    }
};

var hitesh = Object.create(User); // Creating Objects
console.log(hitesh);

hitesh.name = "Abir Pal"
hitesh.getUsernName();


var sam = Object.create(User, {
    name : {value : "Sammy"},
    courseCount : {value : 3}
})
sam.getUsernName();