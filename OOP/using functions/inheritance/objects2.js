let user = {
    active: true,
    sayhello: function(){
        return this.name + " says hi!";
    }
};

let Student = {
    major: "English",
    name: "Abdulla"
};
let Teacher = {
    name: "Manju",
    teach: ["Maths","English"]
};

Object.setPrototypeOf(Student,user);
Object.setPrototypeOf(Teacher,user);

Student.active= false;

console.log(Student.sayhello());
console.log(Teacher.sayhello());