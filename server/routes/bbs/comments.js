let express = require('express');
let router = express.Router();
let comments = require("../../entities/comments");

router.get('/topic/:tid', (req, res, next) => {
	comments.getByTopicId(req.params.tid, req.query.page, req.query.pageSize).then(
		comments => res.jsonp({code: 0, comments}),
		err => res.jsonp({code: 1, msg: err}
	));
});

module.exports = router;
