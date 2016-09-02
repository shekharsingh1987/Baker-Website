//Importing the required modules 
var http=require("http");
var file=require("fs");
var events=require("events");
var Totalrequests=0;

//declare events
var eventEmitter=new events.EventEmitter();


//Create event handler
var responseHandler=function Respond() {     
    console.log('Connected succesfully');
};

var logConsoleHandler=function LogConsole() {
    console.log('Server running at http://127.0.0.1:81/');
}

//console.log(Totalrequests/2);     
eventEmitter.on('logging',logConsoleHandler); 
//Bind these two handler
eventEmitter.on('connection',responseHandler);

http.createServer(function (request,response) { 
    response.writeHead(200, {'Content-Type': 'text/plain'}); 
    var fileData= file.readFileSync('ReadMe.txt');
    response.end(fileData);    
    eventEmitter.emit('connection');
 //   Totalrequests+=1;    
  
}).listen(81);


 eventEmitter.emit('logging');

