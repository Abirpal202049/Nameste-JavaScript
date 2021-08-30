// Switch Cases
// POWER ACCORDING TO THE ROLE AND POSITION
// admin - gets full access
// subadin - get access to create and delete courses
// testadmin - gets access to create and delete exams
// user - gets access consue content

var user ="abir";
switch (user) {
    case "admin":
        console.log("You are admin you get full access!");
        break;
    case "subadmin":
        console.log("You are sub admin you can delete and update courses");
        break;
    case "testadmin":
        console.log("You are testadmin you can delete and update test");
        break;
    default:
        console.log("Trial User");
        break;
}