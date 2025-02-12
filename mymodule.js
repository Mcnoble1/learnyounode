const fs = require('fs');
const path = require('path');

const filterFiles = (dirPath, ext, callback) => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return callback(err);
        }
        const filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);
        callback(null, filteredFiles);
    });
}

module.exports = filterFiles;