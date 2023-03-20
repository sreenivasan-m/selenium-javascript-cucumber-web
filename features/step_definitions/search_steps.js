/* global driver */

const { When, Then } = require('@cucumber/cucumber');
const browserFactory = require('../../selenium/browserFactory');
const searchPage = require('../pages/searchPage')

When(
    'I search for {string} in google search',
    async function (searchText) {
        global.driver = await new browserFactory().startBrowser();
        const search_Page = new searchPage(driver);
        await search_Page.launchApp();
        await search_Page.searchInGoogle(searchText);
        
    }
);

When(
    'I proceed to open the selenium website', async function () {

});

Then('I search a function in text field', async function () {

});

Then('I should see the searched results', async function () {

});