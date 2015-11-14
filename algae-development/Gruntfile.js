module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: [
          'js/vendor/jquery-2.1.4.min.js',
          'js/vendor/circle-progress.js',
          'js/progress.js',
          'js/carousel.js',
          'js/bubbles.js',
          'js/animations.js',
          'js/pages.js',
          'js/index.js'
        ],

        dest: 'js/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
        options: {
            shorthandCompacting: false,
            roundingPrecision: -1
        },
        target: {
            files: {
              'css/algae.min.css': [
                'css/animations.css',
                'css/style.css'
              ]
            }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);

};
