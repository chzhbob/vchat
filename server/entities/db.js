let mysql = require('mysql');

const MYSQL_CONFIG = {
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'vchat'
}

exports.TOPIC_STATUS = {
	VALID : 0,
	DRAFT : 1,
	DELETE : 2
}

exports.query = (str, callback) => {
	return new Promise( (resolve, reject) => {
        let connection = mysql.createConnection(MYSQL_CONFIG);
		connection.connect();
		connection.query(str, (err, rows, fields) => {
			connection.end();
			if(err){
				reject(err);
			}
			resolve(rows);
		});
    });
}

exports.queryOne = (str, callback) => {
	return new Promise( (resolve, reject) => {
        let connection = mysql.createConnection(MYSQL_CONFIG);
		connection.connect();
		connection.query(str, (err, rows, fields) => {
			connection.end();
			if(err){
				reject(err);
			}
			resolve(rows.length ? rows[0] : []);
		});
    });
}