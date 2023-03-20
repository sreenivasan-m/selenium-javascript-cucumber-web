/* global driver */

const { Key, By } = require('selenium-webdriver');
const seleniumActions = require('../../selenium/seleniumActions');
const reader = require('../support/reader');
const dataReader = new reader();
const testData = dataReader.testDataReader();

class searchPage {
    constructor(driver) {
        this.seleniumActions = new seleniumActions(driver);
    }

    searchText_text = By.name("q");
    selectSelenium_link = By.xpath("//h3[contains(.,\'Selenium\')]")
    search_button = By.css(".DocSearch-Button-Placeholder")
    searchInput_Text

    launchApp = async () => {
        await this.seleniumActions.openUrl();
    };

    /*
     * Method to search flights for passengers
     */
    searchInGoogle = async (searchText) => {
        try {


            await this.seleniumActions.enterText(this.searchText_text, 'selenium.dev', 5);
            // await driver.findElement(By.name("q")).sendKeys("selenium.dev")
            // await driver.findElement(By.name("q")).sendKeys(Key.ENTER)
            await this.seleniumActions.click(this.selectSelenium_link, 5);
            // await driver.findElement(By.xpath("//h3[contains(.,\'Selenium\')]")).click()
            await this.seleniumActions.click(this.search_button)

            //await driver.findElement(By.css(".DocSearch-Button-Placeholder")).click()
            await driver.findElement(By.id("docsearch-input")).sendKeys("screenshots")
            await driver.sleep(5000)
            await driver.findElement(By.id("docsearch-input")).sendKeys(Key.ENTER)
            await driver.sleep(5000)
            // await driver.findElement(By.id("full-page-screenshots")).click()
            // await driver.sleep(5000)
            
              const element = await driver.findElement(By.id("full-page-screenshots")).getText();
              // await driver.actions({ bridge: true}).doubleClick(element).perform()
            
    // await driver.findElement(By.css("#takeScreenshot .name > div")).click()
    // await driver.findElement(By.css("#takeScreenshot > .header")).click()
    // console.log('-----------' + element)

            // Assertion
            await this.seleniumActions.assertEqual(element, 'Full page screenshots');
            
        } catch (err) {
            throw new Error(`${err.stack}`);
        }
    };
}

module.exports = searchPage;
