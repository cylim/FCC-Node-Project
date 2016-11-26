var mongodb = require('mongodb');
var https = require("https");

var MongoClient = mongodb.MongoClient;
var mongoURL = process.env.MONGOLAB_URI; // "mongodb://localhost:27017/";

var key = process.env.GoogleKey;
var cx = process.env.GoogleCustomSearchCX;

var saveHistory = function(query){
	var history = {
		term: query,
		timestamp: +new Date()
	};
	MongoClient.connect(mongoURL, function (err, db) {
		if (err) throw err;
		var collection = db.collection('history');
		collection.insert(history, function(err, data){
			db.close();
		});
	});
};

var search = {
	search: function(req, res){
		var query = req.params.query;
		var offset = req.query.offset || 1;

		saveHistory(query);


		var options = {
			host: "www.googleapis.com",
			path: "/customsearch/v1?" +
				"key=" + key +
				"&cx=" + cx +
				"&q=" + query +
				"&searchType=image" +
				"&lr=lang_en" + 
				"&count=10" +
				"&start=" + offset + //startIndex
				"&alt=json",
			headers: {
        		'Content-Type': 'application/json'
    		}
		};

		https.get(options, function(response){
			var body = '';
			response.on('data', function(data){
				body += data;
			});
			response.on('end',function(){
				var resObj = JSON.parse(body);
				res.json(resObj.items);
			});
		}).on("error", function(e){
			res.json({status:"error", message:e.message});
		});
	},
	latest: function(req, res){
		MongoClient.connect(mongoURL, function (err, db) {
			if (err) throw err;

			var collection = db.collection('history');

			collection.find({})
			.limit(10).sort({timestamp:-1})
			.toArray(function(err, data){
				if(err) throw err;
				res.json(data);
				db.close();
			});
		});
	}
};

module.exports = search;