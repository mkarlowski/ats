/**
 * Notify - displays simple notifications about some grunt tasks.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('notify', {
    options: {
      title: 'Vats'
    },
    build: {
      options: {
        message: 'Build Completed'
      }
    },
    validation: {
      options: {
        message: 'HTML Validation Completed'
      }
    }
  });

  grunt.loadNpmTasks('grunt-notify');
};
