var path = require('path');
var mongodb = require('mongodb'); //lets require/import the mongodb native drivers.

var MongoClient = mongodb.MongoClient; //We need to work with "MongoClient" interface in order to connect to a mongodb server.
var database = "mongodb://localhost:27017/"; //process.env.MONGOLAB_URI;

var baseURL = "https://cyfcc.herokuapp.com/api/shortener/";
var regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

var shortener = {
	main: function(req, res){
		var url = req.query.url;
		if(url){
			var resObj = {
				"original_url": url,
				"short_url": 'error'
			};

			if(!url.match(regex)){
				res.json(resObj);
			} else {
				var shortUrl = '';

				MongoClient.connect(database, function (err, db) {
					if (err) throw err;

					var collection = db.collection('redirects');

					collection.count({}, function(err, data){
						if (err) throw err;

						shortUrl = data.toString();

						collection.insert({ 
					    	url: url,
					    	_id: shortUrl.toString()
					    }, function(err, data){
					    	if (err) throw err;

					    	db.close();

					    	resObj = {
								"original_url": url,
								"short_url": baseURL + shortUrl
							};
							res.json(resObj);
					    });
					});
				});
			}
		} else {
			res.sendFile(path.join(__dirname, 'index.html'));
		}
		
	},
	redirect: function(req, res){
		var shortUrl = req.params.link;

		MongoClient.connect(database, function (err, db) {
			if (err) throw err;

		    var collection = db.collection('redirects');
		    collection.find({ _id: shortUrl})
		    .toArray(function(err, data){
		    	if (err) throw err;

		    	var url = '';
		    	if(data.length > 0){
		    		url = data[0].url;
		    	}
				db.close();

		    	if(url !== ''){
		    		res.redirect(url);
		    	} else {
		    		res.json({
		    			url: "Not found!"
		    		});
		    	}
		    });
		});
	}
};

module.exports = shortener;