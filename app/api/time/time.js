var moment = require('moment');
var path = require('path');

function toTimestamp(date) {
    return moment(date, "MMMM D, YYYY").format("X");
}

function toDate(unix) {
    return moment.unix(unix).format("MMMM D, YYYY");
}

var time = {
    main: function(req,res){
        res.sendFile(path.join(__dirname,'index.html'));
    },
    query: function(req,res){
        var date = req.params.query;
        var unix = null;
        var natural = null;
        
        if (+date >= 0) {
            unix = +date;
            natural = toDate(unix);
        } 
        
        if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
            unix = +toTimestamp(date);
            natural = toDate(unix);
        }
        
        var dateObj = { "unix": unix, "natural": natural };
        res.json(dateObj);
    }
};

module.exports = time;

