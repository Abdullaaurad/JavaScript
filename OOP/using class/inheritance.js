class Fruit {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  }
  
class Apple extends Fruit {
    constructor(name, color) {
      super(name);
      this.color = color;
    }
}
  
let greenApple = new Apple("Green Apple", "green");
let redApple = new Apple("Red Apple", "red");
  
console.log(greenApple.getName());
console.log(redApple.getName());
  
console.log(greenApple.color);
console.log(redApple.color);
  
console.log(greenApple);
console.log(redApple);
  