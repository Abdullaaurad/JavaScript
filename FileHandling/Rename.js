const fs = require('fs');

// Specify the old and new file paths
const oldFilePath = 'FileHandling/test.txt';
const newFilePath = 'FileHandling/change.txt';

// Rename the file
fs.rename(oldFilePath, newFilePath, (err) => {
    if (err) {
        console.error('Error renaming file:', err);
        return;
    }
    console.log('File renamed successfully.');
});

fs.readFile('FileHandling/change.txt', 'utf8', (err,data) => {
    if(err){
        console.log("Error");
        return;
    }
    console.log("file Content \n",data);
})