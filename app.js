
const express = require('express');
const authRoutes = require('./routes/auth')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

app.use(session({ 
	secret: 'jkgtefiyekgwHdq;', 
	cookie: { 
		maxAge: 60000000, //1m
		httpOnly: false,
	},
	resave : true,
	saveUninitialized : false,
	store: MongoStore.create({ mongoUrl:"mongodb://localhost:27017/itmo_test_project"})
}));

app.use(cors())
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/api/auth', authRoutes)

app.use((req, res, next)=>{
	if(req.url.startsWith('/admin')){
		if(req.session.auth){
			next();
		} else {
			res.redirect('/')
		}
	} else {
		next();
	}
});

app.use(express.static('private'));

module.exports = app



