var multer = require('multer');
var path = require('path');
var fs = require('fs');

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now());
//   }
// });
var storage = multer.memoryStorage();
var upload = multer({ storage: storage }).single('file');

var filesize = {
	main: function(req, res){
		res.sendFile(path.join(__dirname, "./index.html"));
	},
	stats: function(req, res){
		upload(req, res, function(err){
			if(err) throw err;

			var size = req.file !== undefined ? req.file.size : 0;

			res.json({size: size});
		});
	}
};

module.exports = filesize;