var express = require('express');
var router = express.Router();

// Free Code Camp Node API Project
var timeRouter = require('./time/timeRouter');
var whoamiRouter = require('./whoami/whoamiRouter');
var shortenerRouter = require('./shortener/shortenerRouter');
var imagesearchRouter = require('./imagesearch/imagesearchRouter');
var filesizeRouter = require('./filesize/filesizeRouter');

router.use('/time', timeRouter);
router.use('/whoami', whoamiRouter);
router.use('/shortener', shortenerRouter);
router.use('/imagesearch', imagesearchRouter);
router.use('/filesize', filesizeRouter);



// Free Code Camp Node FullStack Project
var voteRouter = require('./vote/voteRouter');

router.use('/vote', voteRouter);


module.exports = router;