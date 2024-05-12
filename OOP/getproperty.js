// Define an object
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  // Get all the properties into a list
  const propertyList = Object.keys(person);
  let details = [];
  for (let prep in person){
    details.push(prep);
  }
  console.log(propertyList);
  console.log(details);
  