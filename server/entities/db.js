const MYSQL_CONFIG = {
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'vchat',
	debug	 : false,
	charset  : 'utf8mb4',
	connectionLimit: 10
}

let mysql = require('mysql');
let pool  = mysql.createPool(MYSQL_CONFIG);

exports.TOPIC_STATUS = {
	VALID  : 0,
	DRAFT  : 1,
	DELETE : 2
}


exports.query = str => {
	return new Promise( (resolve, reject) => {
		pool.getConnection( (err, connection) => {
			connection.query(str, (err, rows, fields) => {
				connection.release();
				if(err){
					reject(err);
				}
				resolve(rows);
			});
		});
    });
}

exports.queryOne = str => {
	return new Promise( (resolve, reject) => {
		this.query(str).then(
			rows => {
				resolve(rows.length ? rows[0] : {})
			},
			err => {
				reject(err)
			}
		);
	});
}

exports.queryTotal = str => {
	return new Promise( (resolve, reject) => {
		this.query(str).then(
			rows => {
				resolve((rows.length && rows[0]['COUNT(1)']) ? rows[0]['COUNT(1)'] : 0)
			},
			err => {
				reject(err)
			}
		);
	});
}

exports.escape = str => {
	return mysql.escape(str);
}

exports.querys = args => {
	var that = this;
	return new Promise( (resolve, reject) => {
		pool.getConnection( (err, connection) => {
			connection.beginTransaction( err => {
				if (err) { throw err; }
				executeAll(connection, args).then(
					results => {
						connection.release();
						resolve(results);
					},
					err => {
						connection.release();
						reject(err);
					}
				);
			});
		});
	});
}

let executeAll = (connection, args) => {
	return new Promise( (resolve, reject) => {
		var allQuerys = [];
		for(var i in args){
			allQuerys.push(excute(connection, args[i]));
		}

		Promise.all(allQuerys).then(
			results => {
				connection.commit(err => {
					if(err){
						connection.rollback( () => {reject(err)});
					}else{
						resolve(results);
					}
				});
			},
			err => {
				connection.rollback( () => {reject(err)});
			}
		);
	});
}

let excute = (connection, str) => {
	return new Promise( (resolve, reject) => {
		connection.query(str, (err, rows, fields) => {
			if(err){
				reject(err);
			}
			resolve(rows);
		});
	});
}