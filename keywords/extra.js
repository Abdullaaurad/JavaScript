
function max(x, ...extra){
    let largest=x;
    for(let i=0;i<extra.length;i++){
        if(extra[i]>largest){
            largest=extra[i];
        }
    }
    return largest;
}

console.log(max(6,3,9,12,5,2,11));