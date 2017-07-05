const productionSourceGlobJs = ['source/**/*.js'];
const examplesFolder = 'examples';
const examplesGlobs = [examplesFolder+'/**/*.js'];
const productionBuildFolder = 'build';
const readMeStartRegExp = new RegExp('(\\* \\s*\\-{3,} readme start \\-{3,}\\s*)\\n', 'i');
const readMeEndRegExp   = new RegExp('(\\* \\s*\\-{3,} readme end \\-{3,}\\s*)\\n', 'i');

const allSourceGlobsToWatch = productionSourceGlobJs.concat(
	[examplesFolder + '**/index.*']
);

const globsToClearBeforeRebuilding = [
	productionBuildFolder,
	examplesFolder + '/*.js',
	examplesFolder + '/**/*.js.map'
];


const processArguments = require('minimist')(process.argv.slice(2));

const gulp = require('gulp');
const pathTool = require('path');
const webpack = require('webpack-stream');
const runTasksInSequence = require('gulp-sequence');
const replaceFileContent = require('gulp-change');
const deleteFiles = require('del');
const renameFiles = require('gulp-rename');
const minifyJs = require('gulp-uglify');
const pump = require('pump');


const isToBuildForRelease = isRunningInReleasingMode(processArguments);
const isToDevelopWithWatching = !isToBuildForRelease;


function isRunningInReleasingMode(processArguments) {
	const thoseArgumentsStandForRelease = [
		'release',
		'production',
		'ship',
		'final',
		'publish'
	];

	for (let i = 0; i < thoseArgumentsStandForRelease.length; i++) {
		let allowedInput = thoseArgumentsStandForRelease[i];
		if (typeof allowedInput !== 'string' || !allowedInput) {
			continue;
		}

		allowedInput = allowedInput.trim();

		if (processArguments[allowedInput]) return true;
	}

	return false;
}

(function 构建README() {
	gulp.task('build: readme', (thisTaskIsDone) => {
		var actionsToTake = [];

		actionsToTake.push(gulp.src(productionSourceGlobJs));
		actionsToTake.push(replaceFileContent(removeJsDocMarks));
		actionsToTake.push(renameFiles((path) => {
			path.dirname = '';
			path.basename = 'README';
			path.extname = '.MD';
		}));
		actionsToTake.push(gulp.dest('.'));

		pump(actionsToTake, thisTaskIsDone);

		function removeJsDocMarks(content) {
			const readMeAlternativeContent = '<Failed to extract readme content from source code>';

			let readMeContentSnippetInThisFile = content;
			let startPointIndex = 0;

			const startPointMatch = readMeContentSnippetInThisFile.match(readMeStartRegExp);
			if (startPointMatch) {
				startPointIndex = startPointMatch.index + startPointMatch[1].length;
				readMeContentSnippetInThisFile = readMeContentSnippetInThisFile.slice(startPointIndex);
			} else {
				console.error('Can not find <readme starting tag> in file;');
				return readMeAlternativeContent;
			}

			const endPointMatch = readMeContentSnippetInThisFile.match(readMeEndRegExp);
			if (!endPointMatch) {
				console.error('Can not find <readme ending tag> in file.');
				return readMeAlternativeContent;
			}

			// console.log('=== start ===');
			// console.log(startPointMatch.index, startPointMatch[0]);
			// console.log('=== end ===');
			// console.log(endPointMatch.index, endPointMatch[0]);

			readMeContentSnippetInThisFile = readMeContentSnippetInThisFile
				.slice(0, endPointMatch.index)
				.replace(/\n\s* \* /g, '\n')
				.replace(/@example[^\n]*/g, '')
				.replace(/^\n*/, '')
				;

			readMeContentSnippetInThisFile += [
				'',
				'',
				'',
				'# API',
				'',
				'See: [API](API.md).'
			].join('\n');

			return readMeContentSnippetInThisFile;
		}
	});
})();


(function 定义针对脚本的任务() {
	gulp.task('build: js: chief', (thisTaskIsDone) => {
		var actionsToTake = [];

		actionsToTake.push(gulp.src(productionSourceGlobJs));
		actionsToTake.push(minifyJs());
		actionsToTake.push(renameFiles({
			suffix: '.min'
		}));
		actionsToTake.push(gulp.dest(productionBuildFolder));

		pump(actionsToTake, thisTaskIsDone);
	});

	gulp.task('build: js: all', (thisTaskIsDone) => {
		runTasksInSequence(
			'build: js: chief'
		)(thisTaskIsDone);
	});
})();



(function 定义二级公共任务() {
	gulp.task('clear old build', () => {
		return deleteFiles(globsToClearBeforeRebuilding);
	});

	gulp.task('webpack: examples', () => {
		return gulp.src(examplesGlobs)
			.pipe(webpack(require('./webpack.config.js')))
			.pipe(gulp.dest(pathTool.join(
				examplesFolder,
				'example-001'
			)))
			;
	});

	gulp.task('build: all', (thisTaskIsDone) => {
		var tasksToRun = [
			'clear old build',
			[
				'build: readme',
				'build: js: all'
			],
			'webpack: examples'
		];

		runTasksInSequence.apply(null, tasksToRun)(thisTaskIsDone);
	});

	gulp.task('watch', [], () => {
		return gulp.watch(allSourceGlobsToWatch, ['build: all']);
	});
})();


(function 定义所谓顶级任务() {
	var tasksToRun = [
		'build: all'
	];

	if (isToDevelopWithWatching) {
		tasksToRun.push('watch');
	}

	gulp.task('default', (thisTaskIsDone) => {
		runTasksInSequence.apply(this, tasksToRun)(thisTaskIsDone);
	});
})();