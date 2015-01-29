'use strict';

var config = require('./config');

var watch = {
  scripts: {
    files: [config.src + '/**/*.js'],
    tasks: [
      'jshint:scripts',
      'browserify',
      'mocha_phantomjs'
    ]
  },
  tests: {
    files: [
      config.test + '/*.html',
      config.test + '/**/*.js'
    ],
    tasks: [
      'jshint:tests',
      'browserify',
      'mocha_phantomjs'
    ]
  },
  scss: {
    files: [
      config.src + '/**/*.scss',
      config.src + '/**/*.scss'
    ],
    tasks: ['compass:dev', 'compass:test']
  },
  gruntfile: {
    files: [
      'Gruntfile.js',
      'gruntconfig/**/*.js'
    ],
    tasks: ['jshint:gruntfile']
  },
  example: {
    files: [
      config.example + '/*.html',
      config.example + '/**/*.js'
    ],
    tasks: ['build']
  }
};

module.exports = watch;