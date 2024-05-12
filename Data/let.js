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
forloops(6,m);