let express = require('express');
let router = express.Router();
let users = require("../entities/users");

router.get('/register', (req, res, next) => {
	users.register(req.query.email, req.query.password).then(result => res.jsonp({code: 0}));
});

router.get('/login', (req, res, next) => {
	users.login(req.query.email, req.query.password).then(
		result => {
			req.session['uid'] = result.id;
			res.jsonp({code: 0});
		},
		err => {
			res.jsonp({
				code: 1,
				msg: err.msg
			});
		}
	);
});

module.exports = router;