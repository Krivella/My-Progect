let db = require('../models/auth.js');
const crypto = require('crypto'); 

const inner_secret = '1234356fdvgdfhfgjh13345gvb@@$*'

module.exports.login= async function(req, res){
	let data = req.body;
	console.log(data);
	
	if(!data.login || !data.pass)
		return res.status(400).end();
	
	let users = await db.getUser(req.body.login);
	
	for(let i = 0; i < users.length; i++){
		let user = users[i];
		if(user.login == data.login){
			let hashed_pass = crypto
				.createHash('sha256')
				.update(inner_secret + data.pass)
				.digest('hex');
			if(hashed_pass == user.pass){
				req.session.user_name = user.login;
				req.session.auth = true;
				return res.status(200).json({
					login: user.login
				});
			} else {
				req.session.auth = false;
				return res.status(401).end();
			}
		}
	}
	
	req.session.auth = false;
	return res.status(401).end();
}

module.exports.register = function(req, res) {
	res.status(200).json({
		register: "from controller"
	})
}