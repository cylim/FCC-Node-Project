var express = require('express');
var timeRouter = express.Router();

var time = require('./time');

timeRouter.get('/', time.main);
timeRouter.get('/:query', time.query);

module.exports = timeRouter;