var reporter = require('cucumber-html-reporter');

// Putting the date in a strinig makes it expand to show the timezone etc...
const reportTime = `${new Date()}`;

var options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'PROD',
    Browser: 'Chrome',
    Platform: 'Supports All Platform',
    Parallel: 'Scenarios',
    Executed: 'Remote',
    'Report time': reportTime,
  },
};

reporter.generate(options);
