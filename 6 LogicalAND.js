// User should be allowed to purchase when he is :
// 1 . LOGGED IN
// 2 . EMAIL IS VERIFIED
// 3 . CARD INFO - VALID
// If any one is missing you can not purchase

var isloggedin = true;
var isemailverify  = true;
var iscorrectcardinfo = true;

// if(isloggedin){
//     console.log("Logged in Success !")
//     if(isemailverify){
//         console.log("Email is verified Successfully !");
//         if(iscorrectcardinfo){
//             console.log("You can now make a Purchase !");
//         }
//     }
// }

if(isloggedin && isemailverify && iscorrectcardinfo){
    console.log("YOU ARE READY TO PURCHASE ANY COURSE!");
}
else{
    console.log("YOU ARE NOT ALLOWED YOUR REQUIREMENTS DOSE'T SATISFY ");
}