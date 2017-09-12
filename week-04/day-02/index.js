var express = require("express");
var bodyParser = require("body-parser")
var app = express();

app.use('/assets',express.static("assets"));
var jsonParser = bodyParser.json();

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function(req,res) {
	if(req.query.input == undefined){
		res.send({
			"error": "Please provide an input!"
		});
	}
	else {
		let receive = parseInt(req.query.input, 10);
		var respnceBody = {
			"received": receive,
			"result": receive *2
		};
		res.send(respnceBody);
	}
});

app.get('/greeter', function(req,res) {
	if(req.query.name == undefined){
		res.send({
			"error": "Please provide a name!"
		});
	}
	else if(req.query.title === undefined){
		res.send({
			"error": "Please provide a title!"
		});
	}
	else {
//		console.log(req.query);
//		console.log(typeof req.query);
		var name = req.query.name;
		var title = req.query.title;
		var message = "Oh, hi there " + name + ", my dear " + title + "!";
		res.send({
			"welcome_message": message
		});
	}
});

app.get('/appenda/:str', function(req,res) {
	var s = req.params.str;
	var newS = s += "a";
	var response = {
		"appended": newS
	}
	res.send(response);
});

app.post('/dountil/:str', jsonParser, function(req, res) {
	if(req.body.until == undefined){
		res.send({
			"error": "Please provide a number!"
		});
	}
	else {
		var op = req.params.str;
		var goal = req.body.until;
		var re = 1;
		if(op ==="sum"){
			for(var i = 1; i <= goal; i ++) {
				re += i;
			}
			re -= 1;
		}
		else if(op ==="factor"){
			for(var i = 1; i <= goal; i ++) {
				re *= i;
			}
		}
		res.send({
			"result": re
		});
	}
});

app.post('/arrays', jsonParser, function(req, res) {
	if(req.body.what == undefined || req.body.numbers === undefined){
		res.send({
			"error": "Please provide what to do with the numbers!"
		});
	}
	else {
		var op = req.body.what;
		var num = req.body.numbers;
		var arrayResult;
		if(op === 'sum'){
			arrayResult = 0;
			num.forEach(function(element){
				arrayResult += element;
			});
		}
		else if(op === 'multiply') {
			arrayResult = 1;
			num.forEach(function(element){
				arrayResult *= element;
			});
		}
		else if(op === 'double') {
			arrayResult = [];
			num.forEach(function(element){
				arrayResult.push(parseInt(element)*2);
			});
		}
		res.send({
			"result": arrayResult
		})
	}
});

app.post('/sith', jsonParser, function(req, res) {
	if(req.body.text == undefined){
		res.send({
			"error": "Feed me some text you have to, padawan young you are. Hmmm."
		});
	}
	else {
		var sentences = req.body.text.split('. ');
		var newSentence = new Array();
		var returnSentence = [];
		var randomString = ["Arrgh. Uhmm.", "Err..err.err."];
		for(let i = 0; i < sentences.length; i++) {
			let sentenceFragment = sentences[i].toLowerCase().split(' ');
			newSentence.push([]);
			for(let j = 0; j < sentenceFragment.length/2; j++) {
				if(2*j+1 === sentenceFragment.length){
					newSentence[i][2*j] = sentenceFragment[2*j];
				}
				else{
					newSentence[i][2*j] = sentenceFragment[2*j+1];
					newSentence[i][2*j+1] = sentenceFragment[2*j];
				}	
			}
			console.log(newSentence[i]);
			var returnreturnSentence = newSentence[i].join(' ');
			returnSentence[i] = returnreturnSentence.substr(0,1).toUpperCase() + returnreturnSentence.substr(1) + '. ' + randomString[i%2];
		}
		console.log(returnSentence.join(' '))
		res.send();
	}
});



app.listen(8080);