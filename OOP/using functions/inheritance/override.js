let user = {active: true};

let Student = {major: "English"};
let Teacher = {teach: ["Maths","English"]};

Object.setPrototypeOf(Student,user);
Object.setPrototypeOf(Teacher,user);

Student.active= false;

console.log(Student);
console.log(Teacher);
//it shows active for student because we have overloaded it unless we do that
//it will not be shown but can be accessed by calling it

