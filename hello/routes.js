
const Hello = {
	method: 'GET',
	path: '/',
	handler: (request, h) => {
		return 'Hello world';
	}
};

module.exports = {
	Hello,
};