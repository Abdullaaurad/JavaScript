// Define a function that takes two numbers and a callback function
function performOperation(a, b, callback) {
    // Perform some operation (in this case, addition)
    const result = a + b;
    
    // Call the callback function with the result as an argument
    callback(result);
}

// Define a callback function to be passed to performOperation
function displayResult(result) {
    console.log('The result is:', result);
}

// Call performOperation with numbers 5 and 3, and pass displayResult as the callback function
performOperation(5, 3, displayResult);
 