function hi(input){
    console.log(input);
    console.log(this);
}

let newfunction=hi.bind("Value fot this object",5);

newfunction();

//bind changes the value of this to another by creating a saperate function and return it
