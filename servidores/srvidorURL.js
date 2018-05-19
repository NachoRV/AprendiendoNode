/*
* Servidor con procesamiento de url
*/

var http = require('http'),
    url = require('url');

http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;

    if (pathname === '/'){
        res.writeHead(200, {
            'content-Type': 'text/plain'
        });
        res.end('Home page');
    } else if(pathname === '/about'){
        res.writeHead(200, {
            'content-Type': 'text/plain'
        });
        res.end('About Us');
    }else if(pathname === '/redirect'){
        res.writeHead(301, {
            'location': '/'
        });
        res.end();
    }else {
        res.writeHead(404, {
            'content-Type': 'text/plain'
        });
        res.end('Pagina no encontrada');
    }
}).listen(8081, '127.0.0.1');
console.log('server start!!!')