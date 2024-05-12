// Define a memoization function
function memoize(func) {
    const cache = {}; // Cache to store results

    // Define the memoized function separately
    function memoizedFunction(n) {
        if (n in cache) {
            console.log("Retrieving result from cache...");
            return cache[n]; // Return cached result
        } else {
            console.log("Calculating result...");
            const result = func(n); // Calculate result
            cache[n] = result; // Cache the result
            return result;
        }
    }

    return memoizedFunction; // Return the memoized function
}

// Define a function to calculate the square of a number
const square = memoize(function(x) {
    return x * x; // Calculate square
});

// Test the memoized square function
console.log(square(5)); // Output: Calculating result... 25
console.log(square(3)); // Output: Calculating result... 9
console.log(square(5)); // Output: Retrieving result from cache... 25
console.log(square(3)); // Output: Retrieving result from cache... 9
