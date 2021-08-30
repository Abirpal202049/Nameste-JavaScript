// Sign Up details storing

const uid = "78DF23SCD45"; // Unique Identification
// uid = "45FG23DS8954"; => can't assing value to const
var firstName = "Abir";
var lastName = "Pal";
var email = "abirpal282002@gmail.com";
var country = "India";
var state = "West Bengal";
var password = "123456";
var confpassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = true;


// fullname = prompt("Enter your Name :- "); => One way of taking input from webpage

console.log("Uniuque Id :- ",uid);
console.log("User name is :- ",firstName);
console.log("Email Id :- ",email);


// Other way of Displaying => Template Literals
console.log(`
Details about ${firstName} ${lastName} :- 
            User Id : ${uid}
            User Name : ${firstName} ${lastName}
            Country : ${country}
            State : ${state}
            EmailId : ${email}
            Password : ${password}
            Does the user logged in from Google : ${isLoggedInFromGoogle}
            Does the user logged in from Facebook : ${isLoggedInFromFacebook}
`);

