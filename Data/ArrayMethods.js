let grades = [];
for(let i=0;i<10;i++){
    grades.push(i);
}
console.log(grades);

grades.pop();
grades.pop(6);    /*doesn't pops 6 */
console.log(grades);

grades.push(1,20,13,4,7,11);
console.log(grades);

grades=grades.sort();     /* only looks at the first character and sort it */
console.log(grades);  

grades.sort(function(a,b){return a-b});
console.log(grades);  

grades.reverse();
console.log(grades);  

let Arr = [];
Arr.length = 5;   /* the size of the Array is important */

Arr.fill(1, 0, 5);
Arr.push(7);
console.log(Arr);
