const examplesJavaScriptsMatchingPattern = 'examples/**/index.js';
const shouldMinifyJsFiles = !global.isInDevelopmentMode;
// console.log('webpack: global.isInDevelopmentMode', global.isInDevelopmentMode);
// console.log('webpack: shouldMinifyJsFiles', shouldMinifyJsFiles);




const glob = require('glob');
const pathTool = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const allEntries = (function buildMultipleWebpackEntries(patternsArray) {
	function processOnePattern(pattern) {
		const matchedEntriesArray = glob.sync(pattern);
		matchedEntriesArray.forEach(entry => {
			// const nearistFolderName = pathTool.dirname(entry).split(pathTool.sep).pop();
			// const entryName = nearistFolderName;
			const entryName = pathTool.dirname(entry);

			allEntriesInRelativePaths[entryName] = entry;
			allEntries[entryName] = pathTool.resolve(__dirname, entry);
		});
	}

	const allEntries = {};
	const allEntriesInRelativePaths = {}; // for better printing

	patternsArray.forEach(pattern => {
		processOnePattern(pattern);
	});

	console.log('All entries for webpack:');
	console.log(JSON.stringify(allEntriesInRelativePaths, null, '\t'));

	return allEntries;
})([
	examplesJavaScriptsMatchingPattern
]);

const allPlugins = [];

if (shouldMinifyJsFiles) {
	allPlugins.push(new UglifyJSPlugin);
}

module.exports = {
	entry: allEntries,
	output: {
		path: pathTool.resolve(__dirname),
		filename: '[name]/webpack-bundle.js'
	},
	rules: [
		{
			test: /\.js$/,
			exclude: [
				pathTool.resolve(__dirname, 'node_modules')
			],
			use: ['source-map-loader'],
			enforce: 'pre'
		}
	],
	plugins: allPlugins
};