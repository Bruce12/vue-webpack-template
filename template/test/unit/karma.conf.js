// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf'){{#if_eq eslintConfig "airbnb"}};{{/if_eq}}

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: ['./index.{{#if_eq compiler "typescript"}}ts{{else}}js{{/if_eq}}'],
    preprocessors: {
      './index.{{#if_eq compiler "typescript"}}ts{{else}}js{{/if_eq}}': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true{{#if_eq eslintConfig "airbnb"}},{{/if_eq}}
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }{{#if_eq eslintConfig "airbnb"}},{{/if_eq}}
      ]
    }{{#if_eq eslintConfig "airbnb"}},{{/if_eq}}
  }){{#if_eq eslintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq eslintConfig "airbnb"}};{{/if_eq}}
