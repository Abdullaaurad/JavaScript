function factorial(n){
    if(n===1){
        return 1;
    }
    return n*factorial(n-1);
}

let k=5;
k=factorial(k);
console.log("Factorial of 5 =",k);

let l=factorial(6);
console.log("Factorial of 6 =",l);