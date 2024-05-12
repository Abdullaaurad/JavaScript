function User(ID, name) {
    this.ID = ID;
    this.name = name;
};

User.prototype.getName = function() {
    return "User Name =" + this.name;
}

function Student(year, ID, name) {
    User.call(this, ID, name);
    this.year = year;
}

Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

Student.prototype.getName = function() {
    return "Student Name =" + this.name;
}

function Teacher(teach, ID, name) {
    User.call(this, ID, name);
    this.teach = teach;
}

Teacher.prototype = Object.create(User.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.getName = function() {
    return "Lecturer Name =" + this.name;
}

Student.prototype.getYear = function() {
    return "Start year =" + this.year;
}

Teacher.prototype.getTeach = function() {
    return "Lectures Name =" + this.teach.join(", ");
}

let student1 = new Student(2022, 22000021, "Abdulla");
let teacher1 = new Teacher(["DSA", "OS", "Compilers"], 120, "Dinuni");

console.log(student1.getName());
console.log(teacher1.getName());
