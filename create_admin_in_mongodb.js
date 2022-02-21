const { MongoClient } = require('mongodb');
const crypto = require('crypto'); 

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const inner_secret = '1234356fdvgdfhfgjh13345gvb@@$*'

client.connect().
	then(()=>{
		const db = client.db('itmo_test_project');
		const collection = db.collection('users');
		
		collection.insertOne({
			login: 'admin',
			pass: crypto.createHash('sha256')
				.update(inner_secret + 'ITMO')
				.digest('hex')
		}).then(()=>{
			console.log('Админ добавлен в MongoDB');
			process.exit();
		})
	});