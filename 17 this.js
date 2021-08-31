//this in javascript

console.log(this);


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