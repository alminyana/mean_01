module.exports = function(grunt) {
	//configurar tareas
	grunt.initConfig({
		jshint: {
			all: ['server.js',
			'routes/index.js',
			'public/javascripts/app.js',
			'public/javascripts/scripts.js',
			'public/javascripts/controllers/homeCtrl.js',
			'public/javascripts/controllers/newlistCtrl.js',
			'public/javascripts/controllers/todasCtrl.js']
		}
	});
	//importar libreria
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//asignar Tarea a configuración por default
	grunt.registerTask('default', ['jshint']);
};