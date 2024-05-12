class MyClass {
    constructor() {
      this.property1 = 'value1';
      this.property2 = 'value2';
    }
  
    hasProperty(propertyName) {
      return this.hasOwnProperty(propertyName);
    }
}
  
  const myObject = new MyClass();
  
  // Using hasOwnProperty
  console.log(myObject.hasProperty('property1'));  // true
  console.log(myObject.hasProperty('property3'));  // false
  
  // Using undefined check
  console.log(myObject.property2 !== undefined);  // true
  console.log(myObject.property3 !== undefined);  // false
  