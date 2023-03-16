/* global driver */

const { When, Then } = require('@cucumber/cucumber');
const browserFactory = require('../../selenium/browserFactory');
const flightPage = require('../pages/flightPage');
const seatPage = require('../pages/seatPage');
const bagPage = require('../pages/bagPage');
const loginPage = require('../pages/loginPage');

When(
    'I search for a flight from {string} to {string} on {string} for {int} adults and {int} child',
    async function (departure, destination, date, adults, child) {
        global.driver = await new browserFactory().startBrowser();
        const flight_Page = new flightPage(driver);
        await flight_Page.launchApp();
        await flight_Page.verifySearchFlightForPassengers(
            departure,
            destination,
            date,
            adults,
            child
        );
    }
);

When(
    'I proceed to pay with selected seats and 20kg bags added',
    async function () {
        const seat_Page = new seatPage(driver);
        const bag_Page = new bagPage(driver);
        await seat_Page.selectSeatForPassengers();
        await bag_Page.selectBagForPassengers();
    }
);

Then('login popup shows up', async function () {
    const login_Page = new loginPage(driver);
    await login_Page.verifyLoginPopup();
});
