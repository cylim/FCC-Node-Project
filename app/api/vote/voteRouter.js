var express = require('express');
var router = express.Router();

var vote = require('./vote.js');

router.get('/', vote.main);

module.exports = router;