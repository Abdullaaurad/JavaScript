const fs= require ('fs');

fs.readFile('FileHandling/hi.txt', 'utf8', (err,data) => {
    if(err){
        console.log("Error");
        return;
    }
    console.log("file Content \n",data);
})