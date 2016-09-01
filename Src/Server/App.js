//Importing the required modules 
var http=require("http");


//Server code
http.createServer(function (request,response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello Shekhar kumar! nice work');
    
}).listen(81);

console.log('Server running at http://127.0.0.1:81/');

