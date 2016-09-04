var express=require('express');
var app=express();

app.get('/',function(req,res){
	res.send('hello world');
});

var server=app.listen(81,function () {
	// body...
	var host=server.address().address;
	var port=server.address().port;

	console.log("App is listening to https:/%s:%s",host,port);
})