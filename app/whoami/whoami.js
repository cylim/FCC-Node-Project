

var whoami = {
	execute: function(req, res){
	    var header = req.headers;
	    var ip = header['x-forwarded-for'];
	    var language = header["accept-language"];
	    var os = header['user-agent'];
	    os = os.substring(os.indexOf("(") + 1);
	    os = os.split(')', 1)[0];
	    
	    var resObject = {
	        "ipaddress":ip,
	        "language":language,
	        "software":os
	    };
	    res.json(resObject);
	}
};

module.exports = whoami;