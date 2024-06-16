let grades = [30, 20, 45, 12, 23];
console.log(grades);
console.log("2 nd indexes value in Array =",grades[2]);

let grade = new Array(5);

//To make a 2D Array we need to use for loop to ventricle and horizontal 
for (let i = 0; i < grades.length; i++) {
    grade[i] = new Array(5);
    for (let j=0;j<5;j++){
        grade[i][j]=0;
    }
}
grade[0][0] = 90; 
grade[1][1] = 85; 
grade[2][2] = 95; 
grade[3][3] = 10; 
grade[4][4] = 15;

console.log("\t\tThe 2D Array")
console.log(grade);

let Arr = [];
Arr[0]=0;
Arr[1]=1;
Arr[56]=2;
Arr.length=100;
console.log(Arr);
for(let i=0;i<100;i++){
    Arr[i]=i;
}
console.log(Arr);
 
