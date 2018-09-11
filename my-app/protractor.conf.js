// conf.js
exports.config = {
  // Specs here are the cucumber feature files
  specs: [
    './e2e/features/**/*.feature'
  ],

  // Select broeser to run on
  capabilities: {
    browserName: 'chrome'
  },

  directConnect: true,
  baseUrl: 'http://localhost:4200/',

  // Use a custom framework adapter and set its relative path
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  // cucumber command line options
  cucumberOpts: {
    // require step definition files before executing features
    require: [
      './e2e/features/step_definitions/**/*.steps.js'
    ],
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: [
      'json:./e2e/cucumber_report.json', 
      'progress', 
      'pretty:./e2e/cucumber_report.txt'
    ]
  },
  // Enable TypeScript for the tests
  onPrepare() {
    require('ts-node').register({
      project: './e2e/tsconfig.e2e.json'
    });
  }
}