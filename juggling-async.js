// This problem is the same as the previous problem (HTTP COLLECT) in that
// you need to use http.get(). However, this time you will be provided with
// three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs
// and print it to the console (stdout). You don't need to print out the
// length, just the data as a String; one line per URL. The catch is that you
// must print them out in the same order as the URLs are provided to you as
// command-line arguments.

const http = require('http');

const urls = process.argv.slice(2);
const data = [];
let count = 0;

urls.forEach((url, index) => {
    http.get(url, (response) => {
        response.setEncoding('utf8');
        let content = '';
        response.on('data', (chunk) => {
            content += chunk;
        });
        response.on('end', () => {
            data[index] = content;
            count++;
            if (count === urls.length) {
                data.forEach((d) => {
                    console.log(d);
                });
            }
        });
    }).on('error', (error) => {
        console.error(error);
    });
});