let express = require('express');
let router = express.Router();
let topics = require("../../entities/topics");
let topicCategories = require("../../entities/topicCategories");

router.get('/hot', (req, res, next) => {
	topics.getByPage(req.query.page, req.query.ps).then(topics => res.jsonp({code: 0, topics}));
});

router.get('/categories', (req, res, next) => {
	topicCategories.all().then(categories => res.jsonp({code: 0, categories}));
});

router.get('/category/:cid', (req, res, next) => {
	topics.getByPage(req.query.page, req.query.ps, req.params.cid).then(
		topics => res.jsonp({code: 0, topics}),
		err => res.jsonp({code: 1}
	));
});

router.get('/topic/:tid', (req, res, next) => {
	topics.getById(req.params.tid).then(
		topic => res.jsonp({code: 0, topic}),
		err => res.jsonp({code: 1, msg: err}
	));
});

module.exports = router;
