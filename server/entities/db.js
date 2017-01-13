let mysql = require('mysql');

const mysqlConfig = {
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'vchat'
}

exports.query = (str, callback) => {
	return new Promise( (resolve, reject) => {
        let connection = mysql.createConnection(mysqlConfig);
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