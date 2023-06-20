const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {

    response.writeHead(200, {'Content-Type': 'text/html'});

    const url = request.url;

    if(url ==='/') {
        response.write('This is default page, <a href="/read-file">Click here to see file content </a>');
        response.end();
    }
    else if(url ==='/read-file') {
        fs.readFile('whatIsNodeJs.txt', function(err, data) {
            response.write(data);
            return response.end();
        });
    }
    else {
        response.write('Request not handled');
        response.end();
    }

});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
