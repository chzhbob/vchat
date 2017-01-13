var mysql = require('mysql');

var mysqlConfig = {
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'vchat'
}

exports.query = (str, callback) => {
	return new Promise( (resolve, reject) => {
        var connection = mysql.createConnection(mysqlConfig);
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