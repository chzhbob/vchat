let express = require('express');
let router = express.Router();
let topics = require("../../entities/topics");
let topicCategories = require("../../entities/topicCategories");

router.get('/hot', (req, res, next) => {
	Promise.all([topics.getTotal(), topics.getByPage(req.query.page, req.query.ps)]).then( results => {
		if(results.length >= 2){
			res.jsonp({code: 0, topics: results[1], total: results[0]});
		}else{
			res.jsonp({code: 1});
		}
	}, err => {
		res.jsonp({code: 1});
	});
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

router.get('/post', (req, res, next) => {
	topics.post(req.query.title, req.query.content, req.session.uid, req.session.nickname, req.session.avatar).then(
		result => res.jsonp({code: 0, topic: {id: result.insertId}}),
		err => res.jsonp({code: 1, msg: err.msg})
	);
});

module.exports = router;
