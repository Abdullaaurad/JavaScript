function Person(firstName, lastName, age,marks) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.marks=marks;

    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };

    this.DisplayMarks = function () {
        for(let i=0;i<marks.length;i++){
            console.log(marks[i]);
        }
    }
}

let person1 = new Person("John", "Doe", 30,[1,2,3,4,5]);
let person2 = new Person("Jane", "Smith", 25,[6,7,8,9,10]);

console.log(person1.firstName);
console.log(person2.getFullName());
person1.DisplayMarks();