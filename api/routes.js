var express = require('express');
var router = express.Router();

// Free Code Camp Node API Project
var time = require('./time/time');
var whoami = require('./whoami/whoami');
var shortener = require('./shortener/shortener');
var search = require('./imagesearch/search');
var filesize = require('./filesize/filesize');

router.get('/time', time.main);
router.get('/time/:query', time.query);

router.get('/whoami', whoami.execute);

router.get('/shortener', shortener.main);
router.get('/shortener/:link', shortener.redirect);

router.get('/imagesearch/:query', search.search);
router.get('/imagesearch/', search.history);

router.get('/filesize/', filesize.main);
router.post('/filesize/stats', filesize.stats);


// Free Code Camp Node FullStack Project



module.exports = router;