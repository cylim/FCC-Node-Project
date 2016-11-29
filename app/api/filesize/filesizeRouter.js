var express = require('express');
var router = express.Router();

var filesize = require('./filesize');

router.get('/', filesize.main);
router.post('/stats', filesize.stats);

module.exports = router;