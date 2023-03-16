/* global driver */

const { By } = require('selenium-webdriver');

const seleniumActions = require('../../selenium/seleniumActions');

class seatPage {
    constructor(driver) {
        this.seleniumActions = new seleniumActions(driver);
    }

    selectSeatForPassengers = async () => {
        try {
            /*
            Due to time constraint followed the unrecommended way to find the locators please check 
            flightPage.js proper Page Object standards
            */
            
            /* Below combination will make sure to select three seats, due to time constraint followed
            the below approach, it can be handled dynamically in future
            */
            await driver.findElement(By.id('seat-18A')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('seat-18B')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('seat-18C')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('seat-18D')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('seat-18E')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('seat-18F')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('seat-19A')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('seat-19B')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('seat-19C')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('seat-19D')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('seat-19E')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('seat-19F')).click();
            await driver.sleep(2000);
            await driver.findElement(By.css('.ry-button')).click();
            await driver.sleep(2000);
        } catch (err) {
            throw new Error(`${err.stack}`);
        }
    };
}

module.exports = seatPage;
