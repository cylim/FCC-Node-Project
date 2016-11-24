var express = require('express');
var router = express.Router();

var time = require('./time/time');
var whoami = require('./whoami/whoami');
var shortener = require('./shortener/shortener');

var api = '/api/';

router.get(api + 'time', time.main);
router.get(api + 'time/:query', time.query);
router.get(api + 'whoami', whoami.execute);
router.get(api + 'shortener', shortener.main);

module.exports = router;