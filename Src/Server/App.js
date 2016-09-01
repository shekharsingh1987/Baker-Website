//Importing the required modules 
var http=require("http");
var file=require("fs");

var Totalrequests=0;

//Server code
http.createServer(function (request,response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    Totalrequests+=1;
    //response.end(Totalrequests);
   var fileData= file.readFileSync('ReadMe.txt');
    response.end(fileData);   
    console.log(Totalrequests/2);     
    
}).listen(81);

console.log('Server running at http://127.0.0.1:81/');

