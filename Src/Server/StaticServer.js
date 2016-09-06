var express=require('express');
var app=express();

//You can acces everything inside this folder
app.use(express.static('Public'));

app.get('/', function (req, res) {
   res.send('Hello World');
});

var server = app.listen(81, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});


