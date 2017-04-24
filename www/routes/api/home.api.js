const express = require('express');
const HomeRouter = express.Router();

HomeRouter.route('/')
	.get((req, res) => {
		res.send({ data: 'result from api server' });
	});

module.exports = HomeRouter;
