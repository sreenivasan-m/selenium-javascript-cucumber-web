require('dotenv').config();

const appURL = process.env.testURL;
var assert = require('assert');

const { until, Key } = require('selenium-webdriver');

class seleniumActions {
  constructor(driver) {
    this.driver = driver;
  }
  /*
   * Launch the browser
   */
  async openUrl() {
    await this.driver.get(appURL).catch((error) => {
      throw error;
    });
    await this.setMaximizeWindow();
  }

  /*
   * MaximizeWindow
   */
  async setMaximizeWindow() {
    await this.driver.manage().window().maximize();
  }

  /*
   * Enter text
   * @param {*} locator Object, i.e.  { xpath: "//*[@id='Any']" } or WebElement
   */
  async enterText(locator, text, secs = 5) {
    await this.setImplicitTimeout(secs);
    const element = await this.elementFinder(locator);
    await element.click();
    await element.clear();
    await element.sendKeys(text);
    await element.sendKeys(Key.ENTER);
    await this.setDefaultImplicitTimeout();
  }

  /*
   * Element Finder
   * @param {*} locator Object, i.e.  { xpath: "//*[@id='Any']" } or WebElement
   */
  async elementFinder(locator) {
    // TO DO: Added just for stability run, will be removed later
    await this.driver.sleep(1000);
    const element = this.driver.findElement(locator);
    return element;
  }

  /*
   * SetImplicitTimeout
   * @param {*} time
   */
  async setImplicitTimeout(time) {
    await this.driver.manage().setTimeouts({ implicit: time * 1000 });
  }

  /*
   * SetDefaultImplicitTimeout
   */
  async setDefaultImplicitTimeout() {
    await this.driver.manage().setTimeouts({ implicit: 20000 });
  }

  /*
   * Displayed
   * @param {*} locator Object, i.e.  { xpath: "//*[@id='Any']" } or WebElement
   * * @param {*} time
   */
  async isDisplayed(locator, time = 20) {
    await this.setImplicitTimeout(time);
    try {
      const element = await this.elementFinder(locator);
      return element.isDisplayed();
    } catch (error) {
      return false;
    } finally {
      await this.setDefaultImplicitTimeout();
    }
  }

  /*
   * PageNavigationByKeys
   * @param {*} Key - Navigation UP, DOWN..
   * * @param {*} count - How many times
   */
  async pageNavigationByKeys(keys, count = 1) {
    const actions = this.driver.actions();

    for (let i = 0; i < count; i++) {
      await actions.sendKeys(keys).perform();
    }
  }

  /*
   * Assertions
   * @param {*} actual
   * * @param {*} expected
   */
  async assertEqual(element, expected) {
    const actual = await this.driver.findElement(element).getText();
    assert.equal(actual, expected);
  }
  /*
   * Click
   * @param {*} locator Object, i.e.  { xpath: "//*[@id='Any']" } or WebElement
   * * @param {*} time
   */
  async click(locator, time = 20) {
    await this.setImplicitTimeout(time);
    await this.waitUntil(locator);
    const element = await this.elementFinder(locator);
    await element.click();
    await this.setDefaultImplicitTimeout();
  }

  /*
   * Wait for element
   * @param {*} locator Object, i.e.  { xpath: "//*[@id='Any']" } or WebElement
   * * @param {*} time
   */
  async waitUntil(locator, time = 30) {
    await this.driver.wait(
      until.elementIsVisible(await this.elementFinder(locator), time * 1000),
    );
  }
}

module.exports = seleniumActions;
