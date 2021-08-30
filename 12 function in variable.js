/*
Define a function that can assing the role of the user.
A user can be of folling roles
admin - with all access
subadin - get access to create and delete courses
testadmin - gets access to create and delete exams
user - gets access consue content
other - trial user

Input : getUserRole(name , role)
*/

function getUserRole(name , role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break;
        case "subadmin":
            return `${name} is sub-admin with all access to delete and create courses`
            break;
        case "testadmin":
            return `${name} is test-admin with all access to create and delete tests`
            break;
        case "user":
            return `${name} Welcome to LCO ! `
            break;
    
        default:
            return `Trial user`
            break;
    }
}

console.log(getUserRole('Abir Pal', 'testadmin'))
console.log(getUserRole('Saikat Mukherjee', 'admin'))
getUserRole('Anish Gupta', "subadmin"); // => Not displaying anything
console.log('\n');




// Function with Variable => FUNCTION PROGRAMMING
var greeting = function(name){
    console.log(`${name} Welcome to our website named LCO(Learn Code Online)`)
    return 'Namo Nama';
}
console.log(greeting('Rupam Bhattacharya')); // prints both 'return' and 'console.log'
greeting('Anish Gupta'); // prints only the 'console.log'
console.log('\n');




// Arrow Function
var truthdare = ()=>{
    console.log('Lets Play Truth and Dare')
};
truthdare();

