var express=require('express');
var app=express();

//Routing with express framework.


//Get request from home page
app.get('/',function(req,res){
	console.log('This has got get request');
	res.send('hello world GET');
});

//post response from home page
app.post('/',function(req,res) {	
	console.log('Got a post request');
	res.send('Hello world POST');
});

//Delete req from del_user route
app.delete('/del_user',function (req,res) {
	console.log('Delete request has been served');
	res.send('Hello delete user');
});


//Got a get req from /list_user
app.get('/list_user',function (req,res) {
	console.log('get request from /list_user');
	res.send('Hello users');
});

//Got a get req from /Pattern
app.get('/u*s',function (req,res) {
	console.log('get request from /u*s');
	res.send('Hello pattern match with routing');
});


var server=app.listen(81,function () {
	// body...
	var host=server.address().address;
	var port=server.address().port;
	console.log(host);
	console.log("App is listening to https://%s:%s",host,port);
})