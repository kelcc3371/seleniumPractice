var webdriver = require('./node_modules/selenium-webdriver');
var edge = require('selenium-webdriver/edge');
var edgeService = new edge.ServiceBuilder('./edgedriver_mac64/msedgedriver');

async function searchTextOnGoogle() {
  driver = new webdriver.Builder().setEdgeService(edgeService).forBrowser('Microsoft Edge').build();
  driver.manage().window().maximize();

  driver.get('https://www.google.com');
  console.log('hello');

  driver.quit();
}

searchTextOnGoogle();