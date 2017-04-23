class AppllicationRoutes {
	static init(app) {

		const HomeRouter = require('./api/home.api');
		app.use('/api/home', HomeRouter);
	}
}

module.exports = AppllicationRoutes;
