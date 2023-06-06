const seleniumActions = require('../../selenium/seleniumActions');
const reader = require('../support/reader');
const testReader = new reader();
const testData = testReader.dataReader();
const locators = testReader.dataReader();

class seleniumPage {
  constructor(driver) {
    this.seleniumActions = new seleniumActions(driver);
  }

  selectMenu_dropDown = locators.seleniumObj.selectMenu_dropDown;
  selectAboutPage_link = locators.seleniumObj.selectAboutPage_link;
  seleniumAbout_text = locators.seleniumObj.seleniumAbout_text;

  /*
   * Method to open about page in selenium
   */
  openAboutPage = async () => {
    await this.seleniumActions.click(this.selectMenu_dropDown);
    await this.seleniumActions.click(this.selectAboutPage_link);
  };

  /*
   * Validate about page in selenium
   */
  validateAboutSeleniumPageDetails = async () => {
    // Assertion
    await this.seleniumActions.assertEqual(
      this.seleniumAbout_text,
      testData.aboutPage.aboutSelenium,
    );
  };
}

module.exports = seleniumPage;
