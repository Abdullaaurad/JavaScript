class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error('Cannot instantiate abstract class');
      }
    }
  
    calculateArea() {
      throw new Error('Abstract method must be implemented');
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  // Usage
  const circle = new Circle(5);
  console.log(circle.calculateArea());
  
  const rectangle = new Rectangle(10, 5);
  console.log(rectangle.calculateArea());
  