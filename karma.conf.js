var webpackConfig = require('./webpack-test.config.js');

module.exports = function(config) {
  config.set({

    basePath: 'src',

    frameworks: ['jasmine'],

    files: [
      '/**/*.spec.ts'
    ],

    preprocessors: {
      '**/*.spec.ts': ['webpack'],
      '**/*.ts': ['webpack'],
    },

    autoWatch: true,

    browsers: [],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-webpack'
    ],

    reporters: ['progress'],

    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    }
  });
};
