
function pow(x, y){
    let total=1;
    for(let i=0;i<y;i++){
        total*=x;
    }
    return total;
}

let Arr = [pow];
console.log(Arr[0](3,2));
console.log(Arr[0]);
/* we can do it in python too remember it */

//what we have actually done is we have created an array
//without passing data to the Array we have included a function inside it 
//when we need to access it we have to define the index and set the parameters for it.