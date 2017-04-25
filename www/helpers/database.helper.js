const Promise = require('bluebird');
const mongoose = Promise.promisifyAll(require('mongoose'));

class DatabaseHelper {
	static init() {

		// const dbUrl = 'mongodb://localhost:27017/penchiflymanament';
		const dbUrlCloud = 'mongodb://penchi:penchi@ds135800.mlab.com:35800/penchiserver';

		const options = { promiseLibrary: require('bluebird') };
		mongoose.Promise = require('bluebird');
		mongoose.connect(dbUrlCloud, options);

		const db = mongoose.connection;

		// CONNECTION EVENTS
		// When successfully connected

		db.on('connected', () => {
			console.log('Mongoose default connection open');
		});

		// When the connection is disconnected
		db.on('disconnected', () => {
			console.log('Mongoose default connection disconnected');
		});

		// If the connection throws an error
		db.on('error', (err) => {
			console.log(`Mongoose default connection error: ${err}`);
		});

		// If the Node process ends, close the Mongoose connection
		process.on('SIGINT', () => {
			mongoose.connection.close(() => {
				console.log('Mongoose default connection disconnected through app termination');
				process.exit(0);
			});
		});
	}
}

module.exports = DatabaseHelper;
