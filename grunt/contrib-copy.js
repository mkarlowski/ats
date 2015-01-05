/**
 * Copy - copies files like assets or temporary build files.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('copy', {
    normalize: {
      src: '<%= xh.src %>/bower_components/normalize.css/normalize.css',
      dest: '<%= xh.src %>/bower_components/normalize.css/normalize.scss'
    },

    jquery: {
      expand: true,
      cwd: '<%= xh.src %>/bower_components/jquery/dist/',
      src: ['jquery.min.js', 'jquery.min.map'],
      dest: '<%= xh.dist %>/js/'
    },

    // copy assets other than images-to-be-optimized
    // (imagemin & svg2png tasks will take care of that)
    assets: {
      files: [
        {
          expand: true,
          cwd: '<%= xh.src %>',
          src: ['<%= xh.assets %>/**/*.*', '!<%= xh.images %>/**/*.{png,jpg,gif,svg}', '!**/.keep'],
          dest: '<%= xh.dist %>'
        }
      ]
    },

    js: {
      expand: true,
      cwd: '<%= xh.src %>/js/',
      src: ['main.js'],
      dest: '<%= xh.dist %>/js/'
    },

    // Backup include files
    backup: {
      expand: true,
      cwd: '<%= xh.includes %>',
      src: '<%= xh.build %>',
      dest: '<%= xh.tmp %>'
    },

    // Restore include files
    restore: {
      expand: true,
      cwd: '<%= xh.tmp %>',
      src: '<%= xh.build %>',
      dest: '<%= xh.includes %>/'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
