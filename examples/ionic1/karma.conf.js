module.exports = function(config) {
  config.set({

    basePath: '.',

    frameworks: ['jasmine'],

    files: [
      'www/assets/js/lib.bundle.js',
      'www/assets/js/app.bundle.js',
      'node_modules/jasmine-promises/dist/jasmine-promises.js',
      'www/**/*.spec.js'
    ],

    // proxied base paths
    proxies: {
      // required for component assets fetched by Angular's. compiler
      //'/src/': '/base/src/'
    },

    port: 9876,

    logLevel: config.LOG_INFO,

    colors: true,

    autoWatch: true,

    browsers: ['Chrome'],

    // Karma plugins loaded
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher'
    ],

    // Coverage reporter generates the coverage
    reporters: ['progress', 'dots', 'coverage'],

    // Source files that you wanna generate coverage for.
    // Do not include tests or libraries (these files will be instrumented by Istanbul)
    preprocessors: {
      'www/app/common/services/taxonomy/taxonomy.service.js': ['coverage']
    },

    coverageReporter: {
      reporters:[
        {type: 'json', subdir: '.', file: 'coverage-final.json'},
        {type:'text'}
      ]
    },

    singleRun: true
  })
};
