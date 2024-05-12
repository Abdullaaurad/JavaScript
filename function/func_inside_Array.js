
function pow(x, y){
    let total=1;
    for(let i=0;i<y;i++){
        total*=x;
    }
    return total;
}

let Arr = [pow];
console.log(Arr[0](3,2));
/* we can do it in python too remember it */