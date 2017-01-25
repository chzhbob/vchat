let express = require('express');
let router = express.Router();
let comments = require("../../entities/comments");

router.get('/topic/:tid', (req, res, next) => {
	comments.getByTopicId(req.params.tid, req.query.page, req.query.pageSize).then(
		comments => res.jsonp({code: 0, comments}),
		err => res.jsonp({code: 1, msg: err}
	));
});

router.get('/post', (req, res, next) => {
	comments.post(req.query.topicId, req.query.content).then(results => res.jsonp({code: 0, comment: {id: results[0].insertId}}));
});


module.exports = router;
