
tipper("30")
function tipper(a){ // Function 
    var bill = parseInt(a);
    console.log(bill + 5);
}

tipper(5);


// bigtipper("100") // This will show error
var bigTipper = function(a){ // Variable Function
    var bill = parseInt(a);
    console.log(bill + 15);
}
console.log(bigTipper("78"));
bigTipper("200")


var name = "Abir Pal";
console.log(name);


function sayName(){
    var name = "Anish Saha"
    console.log(name);
}
sayName()
console.log(name);