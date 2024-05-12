function hi(x) {
    let y;
    try {
        if (x === undefined) {
            throw "error";
        }
        else{
            return x;
        }
    } catch (error) {
        y = error;
    }
    return y;
}

console.log(hi());
console.log(hi(6));