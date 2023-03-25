/* global driver */

const { When, Then } = require('@cucumber/cucumber');
const browserFactory = require('../../selenium/browserFactory');
const searchPage = require('../pages/searchPage');
const seleniumPage = require('../pages/seleniumPage');

When('I search for {string} in google search', async function (searchText) {
  global.driver = await new browserFactory().startBrowser();
  const search_Page = new searchPage(driver);
  await search_Page.launchApp();
  await search_Page.searchInGoogle(searchText);
});

When('I proceed to open the selenium website', async function () {
  const search_Page = new searchPage(driver);
  await search_Page.openSeleniumFromGoogleSearch();
});

Then('I navigate to About page', async function () {
  const selenium_Page = new seleniumPage(driver);
  await selenium_Page.openAboutPage();
});

Then('I should see the details of About Selenium', async function () {
  const selenium_Page = new seleniumPage(driver);
  await selenium_Page.validateAboutSeleniumPageDetails();
});
