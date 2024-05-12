function Add(x,y){
    return (x+y);
}

function nested(argument,m,n){
    return argument(n,m);
}

console.log(nested(Add,6,1));