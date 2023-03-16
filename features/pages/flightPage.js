/* global driver */

const { Key, By } = require('selenium-webdriver');
const seleniumActions = require('../../selenium/seleniumActions');
const reader = require('../support/reader');
const dataReader = new reader();
const testData = dataReader.testDataReader();

class flightPage {
    constructor(driver) {
        this.seleniumActions = new seleniumActions(driver);
    }

    cookiePopUp_click = By.xpath("//*[@id='cookie-popup-with-overlay']/div/div[3]/button[2]");
    departure_text = By.xpath('//*[@id="input-button__departure"]');
    destination_text = By.id('input-button__destination');
    selectDeparture_button = By.xpath("//*[contains(text(), 'Dublin')]");
    onWay_button = By.css('fsw-trip-type-button:nth-child(2) svg');
    departure_link = By.css('.airport-item--selected > span');
    destination_link = By.css('.ng-star-inserted:nth-child(2) > .body-l-lg > span');
    selectCalendar_button = By.css('.m-toggle__scrollable-item:nth-child(6) > .m-toggle__month');
    selectDate_button = By.css('.datepicker__calendar--left .calendar-body__row:nth-child(2) > .calendar-body__cell-wrap:nth-child(10) > .calendar-body__cell');
    selectAdult_button = By.css('.passengers-picker__passenger-type:nth-child(3) .counter__button-wrapper--enabled');
    selectChild_button = By.css('.passengers-picker__passenger-type:nth-child(5) .counter__button-wrapper--enabled');
    done_button = By.xpath("//button[contains(.,'Done')]");
    search_button = By.xpath("//span[contains(.,'Search')]");
    fareSelect_button = By.xpath('//div[3]/button');
    continueFor_button = By.xpath("//span[contains(.,'Continue for ')]");
    continueValueFare_button = By.xpath("//button[contains(.,'Continue with Value fare')]");
    loginLater_button = By.css('.login-touchpoint__login-later');
    passengerTitle1_dropdown = By.css('.ng-star-inserted:nth-child(1) > pax-passenger .dropdown__toggle');
    passengerTitle1_select = By.css('.dropdown-item__link--highlighted .dropdown-item__description');
    passengerTitle2_dropdown = By.css('#title-0-error-message .dropdown__toggle');
    passengerTitle2_select = By.css('.ng-star-inserted:nth-child(2) > .dropdown-item__link .dropdown-item__label');
    firstNameUserOne_text = By.id('form.passengers.ADT-0.name');
    surNameUserOne_text = By.id('form.passengers.ADT-0.surname');
    firstNameUserTwo_text = By.id('form.passengers.ADT-1.name');
    surNameUserTwo_text = By.id('form.passengers.ADT-1.surname');
    firstNameChild_text = By.id('form.passengers.CHD-0.name');
    surNameChild_text = By.id('form.passengers.CHD-0.surname');
    continue_button = By.xpath("//button[contains(.,'Continue')]");
    okayGotIt_button = By.xpath("//button[contains(.,'Okay, got it.')]");

    launchApp = async () => {
        await this.seleniumActions.openUrl();
    };

    /*
     * Method to search flights for passengers
     */
    verifySearchFlightForPassengers = async (departure, destination, date, adults, child) => {
        try {
            await this.seleniumActions.click(this.cookiePopUp_click);
            await this.seleniumActions.click(this.onWay_button);
            // Customized way of sending text
            await this.seleniumActions.enterText(this.departure_text, departure);
            await this.seleniumActions.click(this.selectDeparture_button);
            // Traditional way of sending text
            await driver.findElement(By.id('input-button__destination')).sendKeys(destination);
            await this.seleniumActions.click(this.destination_link);
            await this.seleniumActions.click(this.selectCalendar_button);
            await this.seleniumActions.click(this.selectDate_button);
            await this.seleniumActions.click(this.selectAdult_button);
            await this.seleniumActions.click(this.selectChild_button);
            await this.seleniumActions.click(this.done_button);
            await this.seleniumActions.click(this.search_button);
            await this.seleniumActions.pageNavigationByKeys(Key.PAGE_DOWN, 5);
            await this.seleniumActions.click(this.fareSelect_button);
            await this.seleniumActions.click(this.continueFor_button);
            await this.seleniumActions.click(this.continueValueFare_button);
            await this.seleniumActions.click(this.loginLater_button);
            await this.seleniumActions.click(this.passengerTitle1_dropdown);
            await this.seleniumActions.click(this.passengerTitle1_select);
            await this.seleniumActions.enterText(this.firstNameUserOne_text, testData.UserOneName);
            await this.seleniumActions.enterText(this.surNameUserOne_text, testData.UserOneSurname);
            await this.seleniumActions.click(this.passengerTitle2_dropdown);
            await this.seleniumActions.click(this.passengerTitle2_select);
            await this.seleniumActions.enterText(this.firstNameUserTwo_text, testData.UserTwoName);
            await this.seleniumActions.enterText(this.surNameUserTwo_text, testData.UserTwoSurname);
            await this.seleniumActions.enterText(this.firstNameChild_text, testData.ChildName);
            await this.seleniumActions.enterText(this.surNameChild_text, testData.ChildSurname);
            await this.seleniumActions.click(this.continue_button);
            await this.seleniumActions.click(this.okayGotIt_button);
            let assertText = await driver.findElement(By.css('.seats-page-title-wrapper')).getText();
            console.log('Assert Text: ' + assertText);
            
            // Assertion
            await this.seleniumActions.assertEqual(assertText, 'Choose your seat preference');
            console.log('Flight Date: ' + date + ' Adults: ' + adults + ' Child: ' + child);
        } catch (err) {
            throw new Error(`${err.stack}`);
        }
    };
}

module.exports = flightPage;
