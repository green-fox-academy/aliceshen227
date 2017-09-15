'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectId;
var url = 'mongodb://localhost:27017/epam';

var mockData = [
					{
						id: 25,
						title: 'Dear JavaScript',
						href: 'http://9gag.com',
						timestamp: 1494339525,
						score: 791
					},
					{
						id: 74,
						title: 'Crockford',
						href: 'http://9gag.com',
						timestamp: 1494138425,
						score: 567
					}
			];

function createDB(){
	MongoClient.connect(url, function (err, db) {
		if (err !== null){
			console.log('Unable to connect to the MongoDB server. Error:', err);
			return;
		}
		var reddit = db.collection('reddit');
		reddit.remove();
		reddit.insert(mockData);
		db.close();
	});
}

function getData(callback){
	MongoClient.connect(url, function (err, db) {
		if (err !== null){
			console.log('Unable to connect to the MongoDB server. Error:', err);
			return;
		}
		db.collection('reddit').find({}).toArray(function(err, element){
				db.close();
				callback(element);
		});	
	});
}
			
function postData(data, callback){
	MongoClient.connect(url, function (err, db) {
		if (err !== null){
			console.log('Unable to connect to the MongoDB server. Error:', err);
			return;
		}
		var info = {
			"title": data.title,
			"href": data.href,
			"timestamp": new Date().getTime(),
			"score": 0,
			"owner": data.owner
		}
		db.collection('reddit').insertOne(info, function(err, element){
			if (err !== null){
				console.log('Unable to connect to the MongoDB server. Error:', err);
				return;
			}
			db.close();
			callback(info);
		});
	});
}

function upVote(postId, callback){
	MongoClient.connect(url, function (err, db) {
		if (err !== null){
			console.log('Unable to connect to the MongoDB server. Error:', err);
			return;
		}
		var reddit = db.collection('reddit');
		reddit.find({'_id': ObjectId(postId)}).toArray(function(err, element) {
			reddit.findAndModify({_id: ObjectId(postId)}, [['_id', 1]],{$set:{score:element[0].score+1}}, {new:true, w:1}, function(err, element){
				db.close();
				callback(element.value);
			});
		});
	});
}

function downVote(postId, callback){
	MongoClient.connect(url, function (err, db) {
		if (err !== null){
			console.log('Unable to connect to the MongoDB server. Error:', err);
			return;
		}
		var reddit = db.collection('reddit');
		reddit.find({'_id': ObjectId(postId)}).toArray(function(err, element) {
			reddit.findAndModify({_id: ObjectId(postId)}, [['_id', 1]],{$set:{score:element[0].score-1}}, {new:true, w:1}, function(err, element){
				db.close();
				callback(element.value);
			});
		});
	});
}

function removePost(postId, callback){
	MongoClient.connect(url, function (err, db) {
		if (err !== null){
			console.log('Unable to connect to the MongoDB server. Error:', err);
			return;
		}
		db.collection('reddit').remove({_id: ObjectId(postId)}, function(err, element){
			db.close();
			callback(element.value);
		});
	});
}

function modifyPost(postId, data, callback){
	MongoClient.connect(url, function (err, db) {
		if (err !== null){
			console.log('Unable to connect to the MongoDB server. Error:', err);
			return;
		}
		var reddit = db.collection('reddit');
		reddit.find({'_id': ObjectId(postId)}).toArray(function(err, element) {
			element[0].title = data.title;
			element[0].href = data.href;
			element[0].timestamp = new Date().getTime();
			reddit.update({_id: ObjectId(postId)}, element[0]);
			db.close();
			callback(element[0]);
		});
	});
}

module.exports = {
	getData:getData,
	createDB: createDB,
	postData: postData,
	upVote: upVote,
	downVote: downVote,
	removePost: removePost,
	modifyPost: modifyPost
};