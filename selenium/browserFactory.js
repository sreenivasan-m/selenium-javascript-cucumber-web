const { Builder } = require('selenium-webdriver');
require('chromedriver');

class browserFactory {
    /*
     * Launching the browser, customizing the below function will support multiple browsers
     */
    async startBrowser(browser = 'chrome') {
        return await new Builder().forBrowser(browser).build();
    }
}

module.exports = browserFactory;
