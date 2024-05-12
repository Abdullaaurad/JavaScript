
let j = new Date;
let k = new Date(2004,11);
console.log("Date and time Now =",j);
console.log(j.getFullYear());
console.log(j.getDate());
console.log(j.getDay());
console.log(j.getHours());
console.log(j.getTimezoneOffset());

j=j+10;
console.log("After process = ",j);
console.log("\nk=",k);
/* we use date to get the time for a perticular process start time and end time */

let f = new Date(2002,311);
console.log("f =",f);

let x=0;
let first = new Date;
for(let i=0;i<1000000000000;i++){
    x=x+1;
}
console.log(x);
let last = new Date;
let totaltime= last-first;
console.log("results in millisecond =",totaltime);