const fs = require('fs');

const filePath = 'FileHandling/hi.txt';
const appendedContent = '\nThis text will be appended to hi.txt.';

fs.appendFile(filePath, appendedContent, (err) => {
    if (err) {
        console.error('Error appending to file');
        return;
    }

    console.log('Content appended to file successfully.');
});

fs.readFile('FileHandling/hi.txt', 'utf8', (err,data) => {
    if(err){
        console.log("Error while Reading");
        return;
    }
    console.log("file Content \n",data);
})