//this in javascript give access to the Global Context In Javascript
// In Node => this gives '{}' empty scope
// In Browser => this give 'window' object

console.log(this); // Empty scope in NODE engine => Global Context

function letsdo(){
    var k = 10;
    console.log(this);
    
}
letsdo();

let mymac = function(){
    var n = "Anish";
    console.log(this);
}
mymac();

/*
todo : If we run the above code in browser then we will get 'window' object in every case
*/