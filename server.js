var express = require('express');
var path = require('path');
var app = express();
var compression = require('compression');
var moment = require('moment');

var oneDay = 86400000;

app.use(compression());
app.use(express.static(__dirname + 'public', { maxAge: oneDay }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/:query', function(req, res) {
    var date = req.params.query;
    var unix = null;
    var natural = null;
    
    // Check for initial unix time
    if (+date >= 0) {
        unix = +date;
        natural = toDate(unix);
    } 
    
    // Check for initial natural time
    if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
        unix = +toTimestamp(date);
        natural = toDate(unix);
    }
    
    var dateObj = { "unix": unix, "natural": natural };
    res.json(dateObj);
});

function toTimestamp(date) {
    // Conver from natural date to unix timestamp
    return moment(date, "MMMM D, YYYY").format("X");
}

function toDate(unix) {
    // Convert unix timestamp to natural date
    return moment.unix(unix).format("MMMM D, YYYY");
}

var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log("Running at " + port);
});