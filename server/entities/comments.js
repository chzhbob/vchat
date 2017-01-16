let db = require('./db');
let validate = require('./validate');

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
