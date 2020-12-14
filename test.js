var chrome = require('./node_modules/chromedriver');
var webdriver = require('./node_modules/selenium-webdriver');


// var service = new chrome.ServiceBuilder('path/to/chromedriver').build();
// chrome.setDefaultService(service);
  
  
async function searchTextOnGoogle() {
  driver = new webdriver.Builder().forBrowser('chrome').build();
  driver.manage().window().maximize();

  driver.get('https://www.google.com');
  console.log('hello');

}

searchTextOnGoogle();