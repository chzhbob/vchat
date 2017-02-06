let db = require('./db');
let validate = require('./validate');
let moment = require('moment');

exports.getByPage = (page = 1, pageSize = 20, category_id = 0) => {

	if(!validate.integer(page, pageSize, category_id)){
		return Promise.reject([]);
	}

	return db.query(`
		SELECT t.*,u.nickname,u.avatar FROM topics t 
		LEFT JOIN users u ON t.created_by = u.id 
		${category_id == 0 ? `` : `WHERE t.category_id = ${Number.parseInt(category_id)}`} 
		ORDER BY t.last_reply_at DESC 
		LIMIT ${Number.parseInt((page - 1) * pageSize)},${Number.parseInt(pageSize)}
	`);
};

exports.getById = (topic_id) => {

	if(!validate.integer(topic_id)){
		return Promise.reject([]);
	}

	return db.queryOne(`
		SELECT t.*,u.nickname,u.avatar FROM topics t 
		LEFT JOIN users u ON t.created_by = u.id 
		WHERE t.id = ${Number.parseInt(topic_id)} 
		AND 'status' = ${db.TOPIC_STATUS.VALID}
	`);
};

exports.post = (title, content, uid, nickname, avatar) => {
	var cid = 1;
	if(title.length <= 0 || content.length <= 0){
		return Promise.reject({msg: '内容不能为空'});
	}

	if(!uid || !nickname){
		return Promise.reject({msg: '您还没有登录哦'});
	}

	return db.query(`
		INSERT INTO topics(\`category_id\`, \`title\`, \`content\`, \`created_by\`, \`created_at\`, \`modified_by\`, \`modified_at\`, \`last_reply_by\`, \`last_reply_name\`, \`last_reply_at\`) 
		VALUES('${cid}',${db.escape(title)},${db.escape(content)},'${uid}','${moment().format()}','${uid}','${moment().format()}','${uid}',${db.escape(nickname)},'${moment().format()}');
	`);
};

exports.getTotal = () => {
	return db.queryTotal(`
		SELECT COUNT(1) FROM topics WHERE 'status' = ${db.TOPIC_STATUS.VALID}
	`);
};
