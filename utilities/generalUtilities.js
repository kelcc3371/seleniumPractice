require('chromedriver');

const { utils } = require('mocha');
const CONSTANTS = require("./constants");
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until,
  Key = webdriver.Key;

//------------ Log in to Salesforce instance ------------
function login(driver, username, password) {
  driver.get(CONSTANTS.Salesforce_URL);
  driver.wait(until.elementsLocated(By.name('username')), 10000);
  driver.findElement(By.id('username')).sendKeys(username);
  driver.findElement(By.id('password')).sendKeys(password);
  driver.findElement(By.name('Login')).click();
}

//------------ Logging ------------
function log(text) {
  if (CONSTANTS.EnableLogging) { console.log(text); }
}

//------------ Check Time Finalized ------------
async function checkTime(driver) {
  let crewFinalizedInfo = await driver.findElement(By.xpath('//c-dcb_crew-board/div/c-dcb_crew-board-finalize-timer')).getText();
    if (crewFinalizedInfo.includes('Crew Board has been finalized')) {
      await driver.findElement(By.xpath('//*[@name="selectdate"]')).click();
      let tomorrow = driver.wait(until.elementLocated(By.xpath('//*[@role="option"][@data-value="tomorrow"]')))
      await tomorrow.click();
      await driver.sleep(1000);
      await log('switched to tomorrow');
    }
}

//------------ Navigate to District ------------
async function navigateToDistrict(driver) {
  driver.wait(until.elementLocated(By.xpath(CONSTANTS.crewPool))).then( async () => {
    await log('navigating')
    await driver.sleep(100);
    await driver.findElement(By.xpath('//*[@data-label="Santa Ana"][@role="tab"]')).click();
    await checkTime(driver);
  })
}

//------------ Drag And Drop Helper ------------
function simulateDragDrop(sourceNode, destinationNode) {
  var EVENT_TYPES = {
      DRAG_END: 'dragend',
      DRAG_START: 'dragstart',
      DROP: 'drop'
  }

  function createCustomEvent(type) {
      var event = new CustomEvent("CustomEvent")
      event.initCustomEvent(type, true, true, null)
      event.dataTransfer = {
          data: {
          },
          setData: function(type, val) {
              this.data[type] = val
          },
          getData: function(type) {
              return this.data[type]
          }
      }
      return event
  }

  function dispatchEvent(node, type, event) {
      if (node.dispatchEvent) {
          return node.dispatchEvent(event)
      }
      if (node.fireEvent) {
          return node.fireEvent("on" + type, event)
      }
  }

  var event = createCustomEvent(EVENT_TYPES.DRAG_START)
  dispatchEvent(sourceNode, EVENT_TYPES.DRAG_START, event)

  var dropEvent = createCustomEvent(EVENT_TYPES.DROP)
  dropEvent.dataTransfer = event.dataTransfer
  dispatchEvent(destinationNode, EVENT_TYPES.DROP, dropEvent)

  var dragEndEvent = createCustomEvent(EVENT_TYPES.DRAG_END)
  dragEndEvent.dataTransfer = event.dataTransfer
  dispatchEvent(sourceNode, EVENT_TYPES.DRAG_END, dragEndEvent)
}

function dragAndDropHelper(driver, source, target) {
  try {
      driver.executeScript(simulateDragDrop, source, target);
  } catch (error) {
      throw error;
  }
}

exports.login=login;
exports.log=log;
exports.checkTime=checkTime;
exports.dragAndDropHelper=dragAndDropHelper;
exports.navigateToDistrict=navigateToDistrict;