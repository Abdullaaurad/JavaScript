function strictModeExample() {
    'use strict';
    let x = 10;
    console.log("Inside strict mode function - x:", x);
}

strictModeExample();

function nonStrictModeExample() {
    x = 30; 
    console.log("Inside non-strict mode function - x:", x);
    y = 40;
}

nonStrictModeExample();

console.log("Outside functions - x:", x);
console.log("Outside functions - y:", y); 

//you can access variables declared inside a function from outside the function in a few different ways
//! when we use strict we can't access them from outside the function like normal in JS