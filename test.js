// var chrome = require('chromedriver');
var webdriver = require('./node_modules/selenium-webdriver');
var edge = require('selenium-webdriver/edge');
var edgeService = new edge.ServiceBuilder('./edgedriver_mac64/msedgedriver');


// var service = new chrome.ServiceBuilder('path/to/chromedriver').build();
// chrome.setDefaultService(service);
  
  
async function searchTextOnGoogle() {
  driver = new webdriver.Builder().setEdgeService(edgeService).forBrowser('Microsoft Edge').build();
  driver.manage().window().maximize();

  driver.get('https://www.google.com');
  console.log('hello');

}

searchTextOnGoogle();