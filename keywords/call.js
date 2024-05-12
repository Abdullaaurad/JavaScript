
function hi(input){
    console.log(input);
    console.log(this);
}

hi.call("Value fot this object",5);
//Doesn't work without the call keyword 

hi("Value",5);