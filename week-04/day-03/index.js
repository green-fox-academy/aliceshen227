'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  }
//  console.log('Connection established to ' + url);
	//exercise 1
	var students = db.collection("students");
	students.remove();
	students.insert([
		{
			"name": "Alexander Zhao",
			"github": "ChiuMungZitAlexander",
			"gender": "male"
		},
		{
			"name": "Alfred Wei",
			"github": "AlfredWei0420",
			"gender": "male"
		},
		{
			"name": "Alice Shen",
			"github": "aliceshen227",
			"gender": "female"
		},
		{
			"name": "Chase Wang",
			"github": "chasssssse",
			"gender": "male"
		},
		{
			"name": "Chris Huang",
			"github": "ChrisH404",
			"gender": "male"
		},
		{
			"name": "Haochen Li",
			"github": "haochenli",
			"gender": "male"
		},
		{
			"name": "Jerry Liu",
			"github": "Jerry-ZWL",
			"gender": "male"
		},
		{
			"name": "Jessie Cai",
			"github": "ttttsai",
			"gender": "female"
		},
		{
			"name": "John Doe",
			"github": "janedoe",
			"gender": "male"
		},
		{
			"name": "Leo Lam",
			"github": "linjialiang1234",
			"gender": "male"
		},
		{
			"name": "Vinson Liu",
			"github": "sliu102",
			"gender": "male"
		},
		{
			"name": "Zhengnan Zhang",
			"github": "ZhengnanZhang",
			"gender": "male"
		},
		{
			"name": "Zoe Zhou",
			"github": "Zoe_Zhou",
			"gender": "male"
		}
	]);
	
	//exercise 3
	students.update({github:"janedoe"}, {$set:{github:"johndoe"}});
//	students.update({name:"Alice Shen", "github": "aliceshen227","gender": "female"}, {name:"Alice Shen", "github": "aliceshen227","gender": "female", age:"22"}, {upsert:true, w: 0});
	students.findAndModify({name:"Alice Shen"}, [['name', 1]],{$set:{age:22}}, {new:true, w:1});
	
	//exercise 4
	students.remove({name:"John Doe"});
	
	//exercise 2
	students.find({name:"Alice Shen"}).toArray(function(err, element) {
		console.log(element);
	});
	students.find({},{github:1,_id:0}).toArray(function(err, element) {
		console.log(element);
	});
	students.find({name:{$ne: "Alice Shen"}},{name:1,_id:0}).toArray(function(err, element) {
		console.log(element);
	});
	students.find({},{gender:1,_id:0}).toArray(function(err, element) {
		console.log(element);
	});
	db.close();
});

function createDB(callback){
	MongoClient.connect(url, function (err, db) {
		if (err) {
			console.log('Unable to connect to the MongoDB server. Error:', err);
		}
	//  console.log('Connection established to ' + url);
		//exercise 1
		var students = db.collection("students");
		students.remove();
		students.insert([
			{
				"name": "Alexander Zhao",
				"github": "ChiuMungZitAlexander",
				"gender": "male"
			},
			{
				"name": "Alfred Wei",
				"github": "AlfredWei0420",
				"gender": "male"
			},
			{
				"name": "Alice Shen",
				"github": "aliceshen227",
				"gender": "female"
			},
			{
				"name": "Chase Wang",
				"github": "chasssssse",
				"gender": "male"
			},
			{
				"name": "Chris Huang",
				"github": "ChrisH404",
				"gender": "male"
			},
			{
				"name": "Haochen Li",
				"github": "haochenli",
				"gender": "male"
			},
			{
				"name": "Jerry Liu",
				"github": "Jerry-ZWL",
				"gender": "male"
			},
			{
				"name": "Jessie Cai",
				"github": "ttttsai",
				"gender": "female"
			},
			{
				"name": "John Doe",
				"github": "janedoe",
				"gender": "male"
			},
			{
				"name": "Leo Lam",
				"github": "linjialiang1234",
				"gender": "male"
			},
			{
				"name": "Vinson Liu",
				"github": "sliu102",
				"gender": "male"
			},
			{
				"name": "Zhengnan Zhang",
				"github": "ZhengnanZhang",
				"gender": "male"
			},
			{
				"name": "Zoe Zhou",
				"github": "Zoe_Zhou",
				"gender": "male"
			}
		]);
		db.close();
	});
}
						
function findStudent(n){
	MongoClient.connect(url, function (err, db) {
		if (err) {
			console.log('Unable to connect to the MongoDB server. Error:', err);
		}
	//  console.log('Connection established to ' + url);
		//exercise 1
		var students = db.collection("students");
		students.find({name:n}).toArray(function(err, element) {
			console.log(element);
		});
		
		db.close();
	});
}

function updateStudent(oldName, newName){
	MongoClient.connect(url, function (err, db) {
		if (err) {
			console.log('Unable to connect to the MongoDB server. Error:', err);
		}
	//  console.log('Connection established to ' + url);
		//exercise 1
		var students = db.collection("students");
		students.update({github:oldName}, {$set:{github:newName}});
		db.close();
	});
}

function modifyAge(n, a){
	MongoClient.connect(url, function (err, db) {
		if (err) {
			console.log('Unable to connect to the MongoDB server. Error:', err);
		}
	//  console.log('Connection established to ' + url);
		//exercise 1
		var students = db.collection("students");
		students.findAndModify({name:n}, [['name', 1]],{$set:{age:a}}, {new:true, w:1});
		db.close();
	});
}

function remove(n){
	MongoClient.connect(url, function (err, db) {
		if (err) {
			console.log('Unable to connect to the MongoDB server. Error:', err);
		}
	//  console.log('Connection established to ' + url);
		//exercise 1
		var students = db.collection("students");
		students.remove({name:n});
		db.close();
	});
}

function getData(callback){
	MongoClient.connect(url, function (err, db) {
		if (err) {
			console.log('Unable to connect to the MongoDB server. Error:', err);
		}
		db.collection("students").find({}).toArray(function(err, element){
				db.close();
				callback(element);
		});	
	});
}

module.exports = getData;