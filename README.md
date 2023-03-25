# selenium-javascript-cucumber-web

This framework designed using selenium-webdriver and cucumber for web app automation

## Prerequisites

- [NodeJS & NPM](https://nodejs.org)

## Installation

1) After cloning the repository, use the following command to create .env
   ```
   cp .env.test .env
   ```
2) Run the following command which will initialize the repository by installing npm modules,

   ```
   npm install
   ```

3) Once the initialization step completes, fill out the configuration variables in `.env` file. By default already the config details are added.

   ```
   CUCUMBER_TAG="@smoke"
   testURL="https://www.google.co.in/"
   ```
   
3) Running the test on local browser 

   ```
   npm run test
   ```

3) Running the lint test (Optional: Below command is only for development purpose)

   ```
   npm run eslint
   ```
4) Running the prettier test (Optional: Below command is only for development purpose)

   ```
   npm run format
   ```

## Reporting

By default the way the scripts are set up is to generate html reports right after test execution completes. 

   ```
   npm run report
   ```
## Validation

1) Sample project created using selenium-webdriver and cucumber for web automation
2) All the step defs verified with assertions, also until function is used it will make sure to check all the elements in the page objects.
3) Execution html report attached in the repo, also below for the reference
4) Page object model implemented
5) Utlities: Selenium action class implemented for navigations, Used yml to fetch testDatat, Browserfactory implemented for browsers.
6) Screenshot attachment implemented for AllSteps, this can modified for failures cases (refer the screenshot)  
