// Function In Js

function sayHellow(nameuser,gender) {
    var sanution = "" ;
    console.log("Hellow From Abir Pal");
    if(gender == "m"){
        sanution = "Mr";
    }
    else if(gender == "f"){
        sanution = "Mrs";
    }
    console.log(`Welcome ${sanution} ${nameuser} To Our Website\n`);
}




sayHellow(); // Calling a function
// sayHellow ; // Referencing a function
sayHellow("Abir Pal","m");
sayHellow(78,"f");
sayHellow('Saikat Mukherjee',"m")




function nameste(){
    return "Atithi Devo Bhava"
}
var greeting = nameste(); // Functional programming


console.log(greeting);
console.log(nameste());
nameste() // This will show no output