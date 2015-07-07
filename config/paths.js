module.exports = {
	less: {
		src: 'assets/less/*.less',
		watch: 'assets/less/**/*.less',
		dest: 'dist/css',
		filename: 'less.css'
	},
	css: {
		src: [
			'assets/css/bootstrap.css',
			'assets/css/font-awesome.css',
			'assets/css/animate.css'
			],
		dest: 'dist/css',
		filename: 'vendor.css'
	},
	js: {
		src: [
			'assets/js/**/*.js',
			'!assets/js/lib/**/*.js'
		],
		watch: [
			'assets/js/**/*.js',
			'!assets/js/lib/**/*.js'
		],
		dest: 'dist/js',
		filename: 'scripts.js',
		vendor: {
			src: [
				'assets/js/lib/jquery.min.js',
				'assets/js/lib/bootstrap.min.js',
				'assets/js/lib/wow.js'
			],
			dest: 'dist/js',
			filename: 'vendor.js'
		}
	},
	jshint: {
		src: [
			'assets/js/**/*.js',
			'!assets/js/lib/**/*.js',
			'config/**/*.js',
			'routes/**/*.js',
			'gulpfile.js',
			'server.js'
		],
		watch: [
			'assets/js/**/*.js',
			'!assets/js/lib/**/*.js',
			'config/**/*.js',
			'routes/**/*.js',
			'gulpfile.js',
			'server.js'
		]
	}
};