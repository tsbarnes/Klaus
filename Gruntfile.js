module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',
          quiet: true
        },
        files: {                         // Dictionary of files
          'gtk-3.0/dist/gtk-light.css': 'sass/gtk-3.0/gtk-light.scss',       // 'destination': 'source'
          'gtk-3.0/dist/gtk-dark.css': 'sass/gtk-3.0/gtk-dark.scss',
          'gnome-shell/gnome-shell.css': 'sass/gnome-shell/gnome-shell.scss'
        }
      }
    },
    watch: {
      sass: {
        files: [
          'sass/**/*.scss'
        ],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);
}