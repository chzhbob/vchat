let db = require('./db');

exports.all = () => {
	return db.query(`
		SELECT * FROM topic_categories 
		ORDER BY 'order' DESC 
	`);
};