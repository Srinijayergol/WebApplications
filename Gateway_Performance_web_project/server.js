var express = require('express');
var app = express();
//var mongojs = require('mongojs');
//var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');
/*app.get('/', function(req, res){
	res.send("Hello world from server.js");
});*/

app.use(express.static(__dirname + "/public"));

//app.use(bodyParser.json());


app.listen(3000);
console.log("Server running on port 3000");
