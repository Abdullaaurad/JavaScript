function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person("John", 25);
let person2 = new Person("Jane", 30);

Person.prototype.sayHi = function() {
    console.log("Hi, my name is " + this.name);
};

person1.sayHi(); // Output: Hi, my name is John
person2.sayHi(); // Output: Hi, my name is Jane