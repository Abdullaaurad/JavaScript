function Shape(color) {
    this.color = color;
}

Shape.prototype.getColor = function() {
    return this.color;
};

function Circle(color, radius) {
    Shape.call(this, color); // Call the Shape constructor with the Circle's context
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
//This line creates a new object that inherits from Shape.
//prototype and sets it as the prototype of Circle.prototype. In other words, Circle.
//prototype now inherits all properties and methods from Shape.prototype
Circle.prototype.constructor = Circle;
//you are correcting the constructor property of Circle.
//prototype to point to Circle instead of Shape.
//This step is important because it maintains the integrity of the prototype chain.
//Without this correction, the constructor property of instances created with new Circle() would incorrectly refer to Shape.

Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
};

let myCircle = new Circle("red", 5);

console.log(myCircle.color);
console.log(myCircle.getColor());
console.log(myCircle.getArea());
