const mongoose = require('mongoose');

export const dbInit = async function (env: { [index: string]: string | undefined }): Promise<void> {
	console.log('  Connecting to database...');
	mongoose.connect(process.env.DATABASE_URL!, { useNewUrlParser: true });
	mongoose.Promise = global.Promise;
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
