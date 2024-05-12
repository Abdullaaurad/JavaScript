let cache ={};
cache[0] = 0;
cache[1] = 1;

function factorial(n){
    if(n in cache){
        console.log("factorial for ",n," is already found");
        return cache[n];
    }
    else if((n-1) in cache){
        console.log("factorial for ",n-1," is already found so we can start from there");
        return n*(cache[n-1]);
    }
    else {
        let k= n*factorial(n-1);
        cache[n]=k;
        return k;
    }
}

console.log("Factorial of 5=",factorial(5));
console.log("Factorial of 12=",factorial(12));
console.log("Factorial of 7=",factorial(7));
console.log("Factorial of 20=",factorial(20));

console.log(cache);