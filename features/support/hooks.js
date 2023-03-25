/* global driver */ 'use strict';

const { Before, After, AfterStep } = require('@cucumber/cucumber');

Before(function () {});

AfterStep(function () {
  const cucumber = this;

  try {
    // To Do Capturing screenshots for all steps, this can modified for failure steps
    //  if (scenario.result.status.includes(Status.PASSED)) {
    return driver.takeScreenshot().then(function (screenShot) {
      cucumber.attach(screenShot, 'base64:image/png');
    });
    // }
  } catch (err) {
    const errorMsg = `Failed to attach screenshot: ${err}`;

    console.error(errorMsg);
    cucumber.attach(errorMsg, 'text/html');
  }
});

After(function () {
  driver.quit();
});
