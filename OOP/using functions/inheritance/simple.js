function Fruit(name) {
    this.name = name;
}

Fruit.prototype.getName = function() {
    return this.name;
};

function Apple(name, color) {
    Fruit.call(this, name);
    this.color = color;
}

Apple.prototype = Object.create(Fruit.prototype);
Apple.prototype.constructor = Apple;

let greenApple = new Apple("Green Apple", "green");
let redApple = new Apple("Red Apple", "red");

// Test the inheritance
console.log(greenApple.getName());
console.log(redApple.getName());

console.log(greenApple.color);
console.log(redApple.color);

console.log(greenApple);
console.log(redApple);
