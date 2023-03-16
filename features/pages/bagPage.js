/* global driver */

const { Key, By } = require('selenium-webdriver');
const seleniumActions = require('../../selenium/seleniumActions');

class bagPage {
    constructor(driver) {
        this.seleniumActions = new seleniumActions(driver);
    }

    /*
     * Method to select passengers bag
     */
    selectBagForPassengers = async () => {
        try {
            /*
            Due to time constraint followed the unrecommended way to find the locators please check 
            flightPage.js proper Page Object standards
            */
            await driver.findElement(By.xpath("//button[contains(.,'Add Fast Track')]")).click();
            await driver.sleep(2000);
            let radio = await driver.findElement(By.css('.card__item:nth-child(2) .ry-radio-circle-button__label'));
            const actions = driver.actions();
            await actions.sendKeys(Key.ARROW_DOWN).perform();
            radio.click();
            await driver.sleep(2000);
            await driver.findElement(By.xpath("//button[contains(.,'Continue')]")).click();
            await driver.sleep(2000);
            await driver.findElement(By.xpath("//h3[contains(.,'The best deals for your trip')]")).click();
            await driver.sleep(2000);
            await driver.findElement(By.xpath("//button[contains(.,'Continue')]")).click();
            await driver.sleep(2000);
            await driver.findElement(By.css('.app-container__main-header-title')).click();
            await driver.sleep(2000);
            let assertText = await driver.findElement(By.xpath("//p[contains(.,'CAR HIRE')]")).getText();
            console.log('Assert Text: ' + assertText);
            await this.seleniumActions.assertEqual(assertText, 'CAR HIRE');
        } catch (err) {
            throw new Error(`${err.stack}`);
        }
    };
}

module.exports = bagPage;
