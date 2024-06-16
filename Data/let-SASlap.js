/*the 'let' keyword is used to declare block-scoped variables */

function forloops(n,m) {
    if (n === 1) {
        console.log(m,"-",n);
    } else {
        console.log(m,"-",n);
        forloops(n - 1,m-1);
    }
}

let m =8;
// m=9; can change the value of the variable defined as let. 
forloops(6,m);