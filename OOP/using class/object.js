class Fruit {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
}
  
let Apple = new Fruit("Apple");
console.log(Apple.getName());