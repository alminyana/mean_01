module.exports = function(grunt) {
	//configurar tareas
	grunt.initConfig({
		jshint: { //tarea depurar js files
			all: ['server.js']
		}
	});
	//importar libreria
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//asignar Tarea a configuración por default
	grunt.registerTask('default', ['jshint']);
};