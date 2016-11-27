var express = require('express');
var path = require('path');
var compression = require('compression');
var bodyParser = require("body-parser");

var app = express();

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// var day = 86400000;
// app.use(express.static(__dirname + '/build/', { maxAge: day }));
app.use(express.static(path.join(__dirname ,'build')));
app.use('/api/', require('./app/api/routes'));

// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err.status);
// });



app.set('port', process.env.PORT || 8080);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});