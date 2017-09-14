'use strict';

var express = require("express");
var app = express();
var database = require("./index");

app.get('/students', function(req,res){
	database(function(db){
		res.send(db);
	});
//	console.log(db);
});

app.listen(8080);
