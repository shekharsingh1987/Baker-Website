var express=require('express');
var app=express();

//You can acces everything inside this folder
app.use(express.static('Public'));
app.use(express.static('Views'));

app.get('/', function (req, res) {
   res.sendFile(__dirname+"/"+"Views"+"/"+"Index.html");
});

var server = app.listen(81, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});


