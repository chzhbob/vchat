let express = require('express');
let router = express.Router();
let moment = require('moment');
let comments = require("../../entities/comments");

router.get('/topic/:tid', (req, res, next) => {
	comments.getByTopicId(req.params.tid, req.query.page, req.query.ps).then(
		comments => res.jsonp({code: 0, comments}),
		err => res.jsonp({code: 1, msg: err}
	));
});

router.get('/post', (req, res, next) => {
	comments.post(req.query.topicId, req.query.content, req.session.uid, req.session.nickname, req.session.avatar).then(
		results => res.jsonp({code: 0, comment: {id: results[0].insertId, created_at: moment().format()}}),
		err => res.jsonp({code: 1, msg: err.msg})
	);
});


module.exports = router;
