function hi(input1,input2) {
    console.log(input1);
    console.log(input2);
    console.log(this);
}

let args = [4, 6];
hi.apply("Value",args);
