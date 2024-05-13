const fs = require('fs');
let val = "Hi my name is Abdulla \n I am here as a coordinator for you\n if you have any questions you may as now before too late \n Enjoy your life at UCSC"

fs.writeFile('FileHandling/hi.txt', val ,err => {
    if(err){
        console.log("Error while Writing");
        return;
    }
    else{
        console.log("Successful write");
    }
})

fs.readFile('FileHandling/hi.txt', 'utf8', (err,data) => {
    if(err){
        console.log("Error while Reading");
        return;
    }
    console.log("file Content \n",data);
})