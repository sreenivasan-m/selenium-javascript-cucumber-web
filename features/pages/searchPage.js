const seleniumActions = require('../../selenium/seleniumActions');
const reader = require('../support/reader');
const testReader = new reader();
const testData = testReader.dataReader();
const locators = testReader.dataReader();

class searchPage {
  constructor(driver) {
    this.seleniumActions = new seleniumActions(driver);
  }

  // locators
  searchText_text = locators.searchObj.searchText_text;
  selectSelenium_link = locators.searchObj.selectSelenium_link;
  seleniumWebdriver_text = locators.searchObj.seleniumWebdriver_text;

  /*
   * Launching the app
   */
  launchApp = async () => {
    await this.seleniumActions.openUrl();
  };

  /*
   * Method to search flights for passengers
   */
  searchInGoogle = async (searchText) => {
    await this.seleniumActions.enterText(this.searchText_text, searchText);
  };

  /*
   * Selenium search from google
   */
  openSeleniumFromGoogleSearch = async () => {
    await this.seleniumActions.click(this.selectSelenium_link);
    // Assertion
    await this.seleniumActions.assertEqual(
      this.seleniumWebdriver_text,
      testData.seleniumPage.homeSelenium,
    );
  };
}

module.exports = searchPage;
