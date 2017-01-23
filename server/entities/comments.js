let db = require('./db');
let validate = require('./validate');
let moment = require('moment');

exports.getByTopicId = (topic_id, page = 1, pageSize = 20) => {

	if(!validate.integer(topic_id, page, pageSize)){
		return Promise.reject([]);
	}

	return db.query(`
		SELECT c.* FROM comments c LEFT JOIN topics t 
		ON c.topic_id = t.id 
		WHERE c.topic_id = ${Number.parseInt(topic_id)} AND 'status' = ${db.TOPIC_STATUS.VALID} 
		ORDER BY c.agrees DESC 
		LIMIT ${Number.parseInt((page - 1) * pageSize)},${Number.parseInt(pageSize)}
	`);
};


exports.post = (topicId, content) => {
	var uid = 1;
	var uname = 'admin';
	return db.query(`
		INSERT INTO comments(\`topic_id\`, \`content\`, \`created_by\`, \`created_name\` , \`created_at\`, \`modified_by\`, \`modified_at\`)
		 VALUES('${topicId}',${db.escape(content)},'${uid}',${db.escape(uname)},'${moment().format()}','${uid}','${moment().format()}');
	`);
};