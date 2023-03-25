const { By } = require('selenium-webdriver');
const seleniumActions = require('../../selenium/seleniumActions');
const reader = require('../support/reader');
const dataReader = new reader();
const testData = dataReader.testDataReader();

class seleniumPage {
  constructor(driver) {
    this.seleniumActions = new seleniumActions(driver);
  }

  selectMenu_dropDown = By.xpath("//a[@id='navbarDropdown']");
  selectAboutPage_link = By.linkText('About Selenium');
  seleniumAbout_text = By.xpath("//h1[contains(.,'About Selenium')]");

  /*
   * Method to open about page in selenium
   */
  openAboutPage = async () => {
    try {
      await this.seleniumActions.click(this.selectMenu_dropDown, 5);
      await this.seleniumActions.click(this.selectAboutPage_link, 5);
    } catch (err) {
      throw new Error(`${err.stack}`);
    }
  };

  /*
   * Validate about page in selenium
   */
  validateAboutSeleniumPageDetails = async () => {
    try {
      // Assertion
      await this.seleniumActions.assertEqual(
        this.seleniumAbout_text,
        testData.AboutPage.aboutSelenium,
      );
    } catch (err) {
      throw new Error(`${err.stack}`);
    }
  };
}

module.exports = seleniumPage;
