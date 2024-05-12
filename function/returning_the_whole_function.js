// Define the Add function
function Add(x, y) {
    return x + y;
}

// Define the nested function
function nested(argument, m, n) {
    // Return the function without invoking it
    return function() {
        return argument(m, n);
    };
}

// Call the nested function with Add as the argument function
const returnedFunction = nested(Add, 6, 1);

// Now you can call the returned function to execute Add
console.log(returnedFunction()); // Output: 7
