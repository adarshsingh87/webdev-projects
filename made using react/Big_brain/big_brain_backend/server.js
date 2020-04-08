const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const database = {
	users: [
		{
			id: '123',
			name: 'adarsh',
			email: 'adarsh@gmail.com',
			password: 'adarsh',
			entries: 0,
			joined: new Date(),
		},
		{
			id: '124',
			name: 'rohan',
			email: 'rohan@gmail.com',
			password: 'rohan',
			entries: 0,
			joined: new Date(),
		},
	],
};

app.get('/', (req, res) => {
	res.send(database.users);
});

app.post('/signin', (req, res) => {
	if (
		req.body.email === database.users[0].email &&
		req.body.password === database.users[0].password
	) {
		res.json('success');
	} else {
		res.status(400).json('error');
	}
});

app.post('/register', (req, res) => {
	database.users.push({
		id: '125',
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		entries: 0,
		joined: new Date(),
	});
	res.json(database.users[database.users.length - 1]);
});

app.listen(3000, () => {
	console.log('app working');
});
