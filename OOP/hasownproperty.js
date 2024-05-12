// Define the parent classes
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
  };
  
  function Bird(name) {
    Animal.call(this, name);
  }
  
  Bird.prototype = Object.create(Animal.prototype);
  
  Bird.prototype.fly = function() {
    console.log(`${this.name} is flying.`);
  };
  
  function Dog(name) {
    Animal.call(this, name);
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  
  Dog.prototype.bark = function() {
    console.log(`${this.name} is barking.`);
  };
  
  // Create instances
  const tweety = new Bird('Tweety');
  const fluffy = new Dog('Fluffy');
  
  // Test inheritance
  console.log(tweety.hasOwnProperty('name'));
  console.log(tweety.hasOwnProperty('fly'));
  console.log(fluffy.hasOwnProperty('bark'));
  