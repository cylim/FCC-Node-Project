var path = require('path');

var shortener = {
	main: function(req, res){
		res.sendFile(path.join(__dirname, 'index.html'));
	}
}