module.exports = function( grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			options:{
				stdout: true
			},
			wrap:{
				command: 'node ./wrapfeature.js'
			},
			transform:{
				command: 'cleaver livedocument.md'
			},
			check: {
				command: 'open livedocument-cleaver.html'
			}
		}
	});

	grunt.loadNpmTasks('grunt-shell-spawn');
	grunt.registerTask('transfer', ['shell:wrap']);
	grunt.registerTask('view', ['shell:check']);

};
