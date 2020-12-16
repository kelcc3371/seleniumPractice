require('dotenv').config();
var webdriver =require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;
var util = require('./utilities/generalUtilities')
var CONSTANTS = require('./utilities/constants')
var assert = require('assert')

// import SearchResultsPage from './../src/pageobjects/SearchResultsPage'

// import DriverBuilder from './../src/lib/DriverBuilder'
// import driverutils from './../src/lib/driver-utils'
var username = process.env.DCB_USER
var password = process.env.DCB_PASSWORD

describe('Acceptance Tests', function () {
var crewInfo;
var driver;
  // before(async function () {
  //   driver = new webdriver.Builder().forBrowser('chrome')
  //   .build();
  //   driver.manage().window().maximize();
  // })

  it('logs in', async function () {
    driver = new webdriver.Builder().forBrowser('chrome')
    .build();
    driver.manage().window().maximize();
    await util.login(driver, username, password);
    await util.log("logging in");
  })

  it('navigates to correct tab', async function () {
    await driver.wait(until.elementLocated(By.xpath(CONSTANTS.crewPool))).then( async () => {
      let title = await driver.getTitle();
      await driver.sleep(1000);
      await assert(title.includes('Lightning Experience'))
    })
  })

  it('moves crew', async function () {
    let crewToMove = await driver.findElement(By.xpath(CONSTANTS.crewToAdd));
    crewInfo = await crewToMove.getText();
    let notActivePool = await driver.findElement(By.xpath(CONSTANTS.notActivePool));
    
    await util.dragAndDropHelper(driver, crewToMove, notActivePool);
  })

  it ('adds nonwork status', async function () {
    await driver.wait(until.elementsLocated(By.xpath(CONSTANTS.nonWorkStatus)), 10000 )
    await driver.findElement(By.xpath(CONSTANTS.nonWorkStart)).sendKeys('12/03/2020');
    await driver.findElement(By.xpath(CONSTANTS.nonWorkEnd)).sendKeys('12/10/2020');
    
    await driver.findElement(By.xpath(CONSTANTS.nonWorkStatus)).click();
    await driver.wait(until.elementsLocated(By.xpath(CONSTANTS.nonWorkOffice)), 1000 );
    await driver.findElement(By.xpath(CONSTANTS.nonWorkOffice)).click();
    await driver.findElement(By.xpath(CONSTANTS.nonWorkSave)).click();
  })

  it('should find unavailable crew', async function() {
    await driver.sleep(3000)
    let unavailableCrewMember = await driver.findElement(By.xpath(CONSTANTS.notActivePool)).getText();
    await assert(unavailableCrewMember.includes(crewInfo));
  })

  after(async function () {
    let logs = await driver.manage().logs().get('browser');
    await util.log(logs);
    
    await driver.quit();
  })
})