const app = require('./app')
const port = process.env.PORT || 5000

const db = require('./models/auth.js');

db.init()
	.then(()=>{
		app.listen(port, () => console.log(`Server has been started on ${port}`))
	});