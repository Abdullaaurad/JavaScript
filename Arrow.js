
let Arrow = () => this;
function normal(){
    return this;
}

console.log(Arrow());
console.log(normal());

let functions = {
    first: Arrow,
    second: normal,
};

console.log(functions.first());
console.log(functions.second());