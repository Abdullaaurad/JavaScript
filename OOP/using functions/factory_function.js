function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.getFullName = function() {
    return this.name;
};

let me = new User("Abdulla", 22);
console.log(me.getFullName());

/* In JavaScript, the prototype property is used to add properties and methods to constructor functions.
When you define a constructor function, such as User in your code
you can attach properties or methods to its prototype so that all instances created from that constructor inherit those properties or methods.
*/