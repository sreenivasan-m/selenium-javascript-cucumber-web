# selenium-javascript-web-cucumber

This framework designed using selenium-webdriver and cucumber for web app

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
   testURL="https://www.ryanair.com/ie/en"
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

1) Complete end to end automation testing performed from search to login as per the expectations
2) All the three scenario steps covered in this implementation
3) All the step defs verified with assertions, also until function is used it will make sure to check all the elements in the page objects.
4) Execution html report attached in the repo, also below for the reference
5) Page objec model implemented (Please refer flightPage.js)
6) Cucumber BBD implemented
7) Utlities: Selenium action class implemented for navigations, Used yml to fetch testDatat, Browserfactory implemented for browsers.
8) Screenshot attachment implemented for AllSteps, this can modified for failures cases (refer the screenshot)
<img width="453" alt="Capture_1" src="https://user-images.githubusercontent.com/28147037/225094426-2c9e00ac-0360-4d54-b102-ba7f18a2fe14.PNG">
<img width="417" alt="Capture_2" src="https://user-images.githubusercontent.com/28147037/225094439-a2a19b0d-f449-47dd-bb2a-1f34410bd9d8.PNG">
<img width="419" alt="Capture_3" src="https://user-images.githubusercontent.com/28147037/225094443-cb6ec734-deb3-452d-9339-dff9ff49d9cb.PNG">
<img width="407" alt="Capture_4" src="https://user-images.githubusercontent.com/28147037/225094448-25f5d30f-c6d5-4d45-9f3f-3e170ba5ace7.PNG">

  
