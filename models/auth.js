const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

exports.init = async function(){
	await client.connect();
}

exports.getUser = async function(login){
	const db = client.db('itmo_test_project');
	const collection = db.collection('users');
	return await collection.find({login}).toArray();	
}