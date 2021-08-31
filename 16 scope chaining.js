// Context - Scope chaining

var n = "Abir Pal";

console.log("LINE NUMBER 5" , n);

function sayName(){
    // var n = "Abraham Paul";
    console.log("LINE NUMBER 9" , n);
    sayName2();

    function sayName2(){
        // var n = "Lucifa Decusa"
        console.log("LINE NUMBER 13" , n);
    }

}

sayName()