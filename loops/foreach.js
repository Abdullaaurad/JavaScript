let Arr = [2,4,6,5,1,3,9,7,12,11,10];

Arr.forEach(element => {
    console.log(element);
});

let grades = [[12,34,11],[5,8,11],[76,81,99]];

for(let i=0;i<3;i++){
    grades[i].forEach(element => {
        process.stdout.write(element + " ");
    });
    console.log("");
}