var express = require('express');
var router = express.Router();

var search = require('./imagesearch');

router.get('/:query', search.search);
router.get('/', search.history);

module.exports = router;