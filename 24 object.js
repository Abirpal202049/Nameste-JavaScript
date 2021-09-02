// Objects in Javascript

var users = {
//  key         :   value       (key-value pair)
    firstName   :   "Abir",
    lastName    :   "Pal",
    role        :   "admin",
    logincount  :   32,
    facebookSignedin : true
}
console.log(users.firstName);
console.log(users["lastName"]); // other way of accessing the elements of the object

console.log(users.logincount);
users.logincount = 44;
console.log(users.logincount);

console.log(users);
console.table(users)

var mobileDetails = {
    company : "APPLE",
    model : "iPhone 12",
    modelNumber : "MGJC3HN/A",
    ROM :   "128 GB",
    Processor : "A14 Bionic Chip",
    display : {
        size : 6.1,
        type : "OLED"
    },
    NetworkType : ['5G' , '4G' ,'3G' , '2G']

}
console.table(mobileDetails);