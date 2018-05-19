var http =  require('http');

http.createServer(function(req, res){
    res.writeHead(200, {
        'Context-Type': 'text/plain'
    })
    res.end('Hola Server de Node funcionando');
}).listen('8080', "127.0.0.1");
console.log("servidor funcionando en el puerto 3000");