
let Me = {
    name: "Abdulla",
    outputMe: function(){
        console.log(this);
    }
};

function hi(x){
    console.log(this);
}

function that(x){
    'use strict';
    console.log(this);
}

Me.outputMe();
hi(5);    //Displays window object 
that(5); 