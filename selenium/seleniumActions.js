require('dotenv').config();

const appURL = process.env.testURL;
const assert = require('assert');

const { until, Key } = require('selenium-webdriver');

class seleniumActions {
  constructor(driver) {
    this.driver = driver;
  }
  /*
   * Launch the browser
   */
  async openUrl() {
    await this.setMaximizeWindow();
    await this.driver.get(appURL).catch((error) => {
      throw error;
    });
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
  async enterText(locator, text) {
    const element = await this.elementFinder(locator);
    await element.click();
    await element.clear();
    await element.sendKeys(text);
    await element.sendKeys(Key.ENTER);
  }

  /*
   * Element Finder
   * @param {*} locator Object, i.e.  { xpath: "//*[@id='Any']" } or WebElement
   */
  async elementFinder(locator) {
    const element = this.driver.findElement(locator);
    await this.highlighter(element);
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
  async isDisplayed(locator) {
    const element = await this.elementFinder(locator);
    return element.isDisplayed();
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
  async click(locator) {
    await this.waitUntil(locator);
    const element = await this.elementFinder(locator);
    await element.click();
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

  /*
   * Wait for element
   * @param {*} locator Object, i.e.  { xpath: "//*[@id='Any']" } or WebElement
   * * @param {*} time
   */
  async wait(time = 30) {
    await this.driver.sleep(time);
  }

  /*
   * Element highlighter
   * @param {*} locator Object, i.e.  { xpath: "//*[@id='Any']" } or WebElement
   */
  async highlighter(element) {
    const actions = this.driver.actions({ async: true });
    await actions.move({ origin: element }).perform();
    await this.driver.executeScript(
      "arguments[0].setAttribute('style', 'border:2px solid red; background:yellow')",
      element,
    );
  }

  /*
   * Switching between the tabs
   * @param {*} locator Object, i.e.  { xpath: "//*[@id='Any']" } or WebElement
   */
  async switchToNewTab(element) {
    //Store the ID of the original window
    const originalWindow = await this.driver.getWindowHandle();

    //Check we don't have other windows open already
    assert((await this.driver.getAllWindowHandles()).length === 1);

    //Click the link which opens in a new window
    await this.click(element);

    //Wait for the new window or tab
    await this.driver.wait(
      async () => (await this.driver.getAllWindowHandles()).length === 2,
      10000,
    );

    //Loop through until we find a new window handle
    const windows = await this.driver.getAllWindowHandles();
    windows.forEach(async (handle) => {
      if (handle !== originalWindow) {
        await this.driver.switchTo().window(handle);
      }
    });
  }
}

module.exports = seleniumActions;
