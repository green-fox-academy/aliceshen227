'use strict';

var express = require('express');
var app = express();
var database = require('./database');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

database.createDB();

app.use('/',express.static('public'));

app.get('/reddit.html', function(req,res) {
	res.sendFile(__dirname + '/public/reddit.html');
});

app.get('/hello', function(req,res){
	res.send('hello world');
});

app.get('/posts', function(req,res) {
	database.getData(function(db){
		res.send(db);
	});
});

app.post('/posts', jsonParser, function(req, res) {
	var post = {
		title: req.body.title,
		href: req.body.href,
		owner: req.body.owner
	};
	database.postData(post, function(data){
		res.send(data);
	});
});

app.put('/posts/:id/upvote', function (req, res) {
	var id = req.params.id;
	database.upVote(id, function(data){
		res.send(data);
	});
});

app.put('/posts/:id/downvote', function (req, res) {
	var id = req.params.id;
	database.downVote(id, function(data){
		res.send(data);
	});
});

app.delete('/posts/:id', function(req, res) {
	var id = req.params.id;
	database.removePost(id, function(data){
		res.send(data);
	})
});

app.put('/posts/:id', jsonParser, function(req,res) {
	var id = req.params.id;
	var post = {
		title: req.body.title,
		href: req.body.href
	};
	database.modifyPost(id, post, function(data) {
		res.send(data);
	})
});

app.listen(8080);