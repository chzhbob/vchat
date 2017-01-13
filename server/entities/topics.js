let db = require('./db');
let validate = require('./validate');

exports.getByPage = (page = 1, pageSize = 20, category_id = 0) => {

	if(!validate.integer(page, pageSize, category_id)){
		return Promise.reject([]);
	}

	return db.query(`
		SELECT * FROM topics 
		${category_id == 0 ? `` : `WHERE category_id = ${Number.parseInt(category_id)}`} 
		ORDER BY last_reply_at DESC 
		LIMIT ${Number.parseInt((page - 1) * pageSize)},${Number.parseInt(pageSize)}
	`);
};