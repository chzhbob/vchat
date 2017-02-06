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
			req.session['nickname'] = result.nickname;
			req.session['avatar'] = result.avatar;
			res.jsonp({code: 0, user: {
				uid: result.id,
				nickname: result.nickname,
				avatar: result.avatar
			}});
		},
		err => {
			res.jsonp({
				code: 1,
				msg: err.msg
			});
		}
	);
});

router.get('/logout', (req, res, next) => {
	req.session['uid'] = null;
	req.session['nickname'] = null;
	req.session['avatar'] = null;
	res.jsonp({code: 0});
});

router.get('/getLoginStatus', (req, res, next) => {
	if(req.session['uid'] && req.session['nickname']){
		res.jsonp({code: 0, user: {
			uid: req.session['uid'],
			nickname: req.session['nickname'],
			avatar: req.session['avatar']
		}});
	}else{
		res.jsonp({code: 1});
	}
});

module.exports = router;