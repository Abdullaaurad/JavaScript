var number =20;
var x = 5.2;

var y = x + number;
console.log(y);
y=y-2.3;
console.log(y);
var l=y*4.0;
console.log(l);
y=l/4;
console.log(y);
var remainder = y%5;
console.log(remainder);   

/* JS has some problem in mathematic it sometime goes to the negative infinity like in 12.79999999999999 for 12.8   */

console.log(2==2);      //equal
console.log("2"==2);    //doesn't care about the data type
console.log(2===2);     //strictly equal
console.log("2"===2);   //compares the datatype too