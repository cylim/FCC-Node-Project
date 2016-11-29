var express = require('express');
var shortenerRouter = express.Router();

var shortener = require('./shortener');

shortenerRouter.get('/', shortener.main);
shortenerRouter.get('/:link', shortener.redirect);

module.exports = shortenerRouter;