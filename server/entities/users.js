let db = require('./db');
let validate = require('./validate');
let moment = require('moment');
let crypto = require('crypto');

exports.register = (email, password) => {
	let hash = crypto.createHmac('sha256', db.SALT).update(password).digest('hex');
	return db.query(`
		INSERT INTO users(\`nickname\`,\`email\`,\`password\`,\`sign_up\`) 
		VALUES(${db.escape(email)},${db.escape(email)},'${hash}','${moment().format()}')
	`);
};

exports.login = (email, password) => {
	return getUserByEmail(email).then(result => verifyPassword(result, password));
}

var getUserByEmail = email => {
	return db.queryOne(`SELECT * FROM users WHERE email = ${db.escape(email)}`);
}

var verifyPassword = (user, password) => {
	return new Promise( (resolve, reject) => {
		let hash = crypto.createHmac('sha256', db.SALT).update(password).digest('hex');
		if(user && hash === user.password){
			resolve({id: user.id});
		}else{
			reject({msg: 'password error'});
		}
	});
}