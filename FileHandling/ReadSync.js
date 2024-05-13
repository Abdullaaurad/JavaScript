const fs = require('fs');

// Specify the file path
const filePath = 'FileHandling/ho.txt';
console.log("Normal way\n");
fs.readFile(filePath, 'utf8', (err,data) => {
    if(err){
        console.log("Error");
        return;
    }
    console.log("file Content \n",data);
})
console.log("executed before the content of the file is been printed");

try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('File content (sync):', data);
} catch (err) {
    console.error('Error reading file synchronously:', err);
}

console.log("after displaying the content this message is shown "); 