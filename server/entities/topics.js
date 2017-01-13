var db = require('./db');

exports.getByPage = function(page, pageSize){
	return db.query('SELECT * FROM topics');
};
