var express = require('express');
var whoamiRouter = express.Router();

var whoami = require('./whoami');

whoamiRouter.get('/', whoami.execute);

module.exports = whoamiRouter;