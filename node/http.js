/* 
https://www.maif.fr/assurance

protocol : https://
domain : 13.107.246.42
port : 3000
ressource : /assurance (=>end point)
*/

const http = require("http");


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><meta charset="UTF-8"></head>')
    //res.end('Hello World\n');

    // console.log(req.url);
    // console.log(req.method);
    //console.log(res);

    switch (req.url) {
        case '/':
        case '/home':
           res.write('<h1>Vous êtes sur la home page</h1>');            
            break;
        case '/formation':
            res.write('<h1>Vous êtes en formation chez Simplon</h1>');
            break;
        case '/entreprise':
            res.write('<h1>Vous êtes à la Maif</h1>');
            break;
        case '/maison':
            res.write('<h1>Vous êtes en pyjama</h1>');
            break;
        default:
            res.write('<h1>404 dans les choux</h1>');
            break;
    }
res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

