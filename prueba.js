//console.log("Prueba de javascrip en node.js");
/*
for (var i = 0; i < 10 ; i++){
    console.log("valor de i "+ i);
};*/

var http = require ('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Desplegando aplicacion web con Node.js');
}).listen(5000,'127.0.0.1');
console.log('Servisor ejecutandose a la escucha del puerto 5000');