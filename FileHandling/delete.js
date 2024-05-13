const fs = require('fs');

const filePath = 'FileHandling/delete.txt';

// Delete the file
fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully.');
});

console.log("Search for the file")
if (fs.existsSync(filePath)) {
    console.log('File exists.');
} else {
    console.log('File does not exist.');
}
