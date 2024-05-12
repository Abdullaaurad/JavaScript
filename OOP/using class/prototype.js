class MyClass {
    constructor(data) {
      this.data = data;
    }
}

MyClass.prototype.printData = function() {
    console.log(this.data);
};
  
const myObj = new MyClass('Hello, world!');
myObj.printData();
  