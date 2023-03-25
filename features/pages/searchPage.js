const { By } = require('selenium-webdriver');
const seleniumActions = require('../../selenium/seleniumActions');
const reader = require('../support/reader');
const dataReader = new reader();
const testData = dataReader.testDataReader();

class searchPage {
  constructor(driver) {
    this.seleniumActions = new seleniumActions(driver);
  }

  // locators
  searchText_text = By.name('q');
  selectSelenium_link = By.xpath("//h3[contains(.,'Selenium')]");
  seleniumWebdriver_text = By.xpath("//h4[contains(.,'Selenium WebDriver')]");

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
    try {
      await this.seleniumActions.enterText(this.searchText_text, searchText, 5);
    } catch (err) {
      throw new Error(`${err.stack}`);
    }
  };

  /*
   * Selenium search from google
   */
  openSeleniumFromGoogleSearch = async () => {
    try {
      await this.seleniumActions.click(this.selectSelenium_link, 5);
      // Assertion
      await this.seleniumActions.assertEqual(
        this.seleniumWebdriver_text,
        testData.SeleniumPage.homeSelenium,
      );
    } catch (err) {
      throw new Error(`${err.stack}`);
    }
  };
}

module.exports = searchPage;
