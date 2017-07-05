var path = require('path');

module.exports = {
	entry: './examples/example-001/index.js',
	output: {
		filename: 'webpack-bundle.js',
		path: path.resolve(__dirname, 'examples/example-001')
	}
};