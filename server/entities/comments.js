let db = require('./db');
let validate = require('./validate');
let moment = require('moment');

exports.getByTopicId = (topic_id, page = 1, pageSize = 20) => {

	if(!validate.integer(topic_id, page, pageSize)){
		return Promise.reject([]);
	}

	return db.query(`
		SELECT c.*,u.nickname,u.id as uid,u.avatar FROM comments c 
		LEFT JOIN topics t ON c.topic_id = t.id 
		LEFT JOIN users u ON c.created_by = u.id 
		WHERE c.topic_id = ${Number.parseInt(topic_id)} AND 'status' = ${db.TOPIC_STATUS.VALID} 
		ORDER BY c.agrees DESC 
		LIMIT ${Number.parseInt((page - 1) * pageSize)},${Number.parseInt(pageSize)}
	`);
};


exports.post = (topicId, content, uid, nickname, avatar) => {
	if(!topicId){
		return Promise.reject({msg: '参数错误'});
	}

	if(!content || content.length <= 0){
		return Promise.reject({msg: '内容不能为空'});
	}

	if(!uid || !nickname){
		return Promise.reject({msg: '您还没有登录哦'});
	}

	return db.querys([`
		INSERT INTO comments(\`topic_id\`, \`content\`, \`created_by\` , \`created_at\`, \`modified_by\`, \`modified_at\`)
		 VALUES('${topicId}',${db.escape(content)},'${uid}','${moment().format()}','${uid}','${moment().format()}');
	`, `
		UPDATE topics SET \`comments\` = \`comments\` + 1 , \`last_reply_by\` = '${uid}' , 
		\`last_reply_at\` = '${moment().format()}' , \`last_reply_name\` = ${db.escape(nickname)} 
		WHERE id = ${topicId}
	`]);
};