var express = require('express');
var router = express.Router();

var topics = require("../../entities/topics");

/* GET home page. */
router.get('/', function(req, res, next) {
	topics.getByPage(1, 10).then( result => res.jsonp({code: 0, data: result}) );
});

module.exports = router;
