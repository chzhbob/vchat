let db = require('./db');
let validate = require('./validate');

exports.getByPage = (page = 1, pageSize = 20, category_id = 0) => {

	if(!validate.integer(page, pageSize, category_id)){
		return Promise.reject([]);
	}

	return db.query(`
		SELECT * FROM topics t 
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
		SELECT * FROM topics WHERE id = ${Number.parseInt(topic_id)} 
		AND 'status' = ${db.TOPIC_STATUS.VALID}
	`);
};

exports.post = (content) => {
	return db.query("INSERT INTO topics(`category_id`, `title`, `content`, `created_by`, `created_at`) VALUES(1,'"+content+"','"+content+"',1,'2017-01-13 14:51:01');");
};