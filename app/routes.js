var express = require('express');
var router = express.Router();

var time = require('./time/time');
var whoami = require('./whoami/whoami');
var shortener = require('./shortener/shortener');
var search = require('./imagesearch/search');

var api = '/api/';

router.get(api + 'time', time.main);
router.get(api + 'time/:query', time.query);
router.get(api + 'whoami', whoami.execute);
router.get(api + 'shortener', shortener.main);
router.get(api + 'shortener/:link', shortener.redirect);
router.get(api + 'imagesearch/:query', search.search);
router.get(api + 'imagesearch/', search.latest);

module.exports = router;