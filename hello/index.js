'use strict';

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

async function init() {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost',
	});

	server.route(routes.Hello);

	await server.start();

	console.log('Server is running on ', server.info.uri);
}

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();