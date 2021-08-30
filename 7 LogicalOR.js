// User should logged in from any one of the below things
// 1. EMAIL
// 2. FACEBOOK
// 3. GOOGLE

var email = true;
var Facebook = false;
var google = false;

// if(email){
//     console.log("Logged in successfully!");
// }
// else if(Facebook){
//     console.log("Logged in successfully!");
// }
// else if(google){
//     console.log("Logged in successfully!");
// }
// else{
//     console.log("Sorry! You are not logged in, Please try again...");
// }



if(email || Facebook || google){
    console.log("Logged in successfully!");
}
else{
    console.log("Sorry! You are not logged in to LCO (Learn Code Online), Please try again...");
}