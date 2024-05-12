function memoize(func) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args); // Create a unique key for the arguments
        if (!cache[key]) {
            cache[key] = func.apply(this, args); // Calculate and cache the result
        }
        return cache[key]; // Return the cached result
    };
}

// Define a factorial function
const factorial = memoize(function(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1); // Recursive calculation
    }
});

// Test the memoized factorial function
console.log(factorial(5)); // Output: 120 (calculates factorial(5) only once)
console.log(factorial(3)); // Output: 6 (retrieves cached result for factorial(3))
console.log(factorial(5)); // Output: 120 (retrieves cached result for factorial(5))
