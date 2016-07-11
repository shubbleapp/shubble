module.exports = function (grunt)
{
  grunt.initConfig(
  {
    pkg: grunt.file.readJSON('package.json'),

    jshint:
    {
      myFiles:
      [
        'Gruntfile.js',
        './lib/*/*.js'
      ]
    },

    nodemon: { script: '.' }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', [ 'jshint', 'nodemon' ]);
};
