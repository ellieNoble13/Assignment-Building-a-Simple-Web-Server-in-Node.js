import fs from 'fs';
import http from 'http';


const server = http.createServer((req, res) => {

    if (req.url === '/') {
        fs.readFile('home.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end("500 - Internal Server Error: Could not load home.html");
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
    else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("This is the about page!");
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("404 - Not found");
    }

});
server.listen(3000, () => {
    console.log("Server running on http://localhost:8000");
});