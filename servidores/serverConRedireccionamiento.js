var http = require('http');

http.createServer(function(req,res){
    res.writeHead(301,{
        'location': 'https://github.com/'
    });
    res.end();
}).listen(8080,'127.0.0.1');
console.log('server funcionado');