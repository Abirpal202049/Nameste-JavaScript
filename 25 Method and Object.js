var users = {
    firstName   :   "Abir",
    lastName    :   "Pal",
    role        :   "admin",
    logincount  :   32,
    facebookSignedin : true,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName)
    },
    getCourseCount : function(){
        return `${this.firstName} ${this.lastName} is enrolled in total of ${this.courseList.length} course`
    },
    info : function(){
        console.log(`
User Details :- 
    Name    :- ${this.firstName} ${this.lastName}
    Role    :- ${this.role}
    Courses :- ${this.courseList}
    ${this.facebookSignedin ? "Yes" : "No" } The User Is Signed In With Facebook
    The User Has Signed Up ${this.logincount} times`);
    }
};
var courseList = true;
console.log(users.firstName)
// console.table(users)

console.log(users.getCourseCount());
users.buyCourse("React JS Course")
users.buyCourse("MERN Course")
console.log(users.getCourseCount());
console.log(users.courseList);


users.info();