/* global driver */

const { By } = require('selenium-webdriver');

const seleniumActions = require('../../selenium/seleniumActions');

class loginPage {
    constructor(driver) {
        this.seleniumActions = new seleniumActions(driver);
    }

    // Validate the login popup
    verifyLoginPopup = async () => {
        try {
            /*
            Due to time constraint followed the unrecommended way to find the locators please check 
            flightPage.js proper Page Object standards
            */
            await driver
                .findElement(By.xpath("//button[contains(.,'Continue')]"))
                .click();
            await driver.findElement(By.css('.auth-popup')).click();

            let assertText = await driver
                .findElement(By.xpath("//h3[contains(.,'Log in to continue')]"))
                .getText();
            console.log('Assert Text: ' + assertText);
            // Assertion
            await this.seleniumActions.assertEqual(
                assertText,
                'Log in to continue'
            );
        } catch (err) {
            throw new Error(`${err.stack}`);
        }
    };
}

module.exports = loginPage;
