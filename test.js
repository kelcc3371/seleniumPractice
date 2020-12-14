require('chromedriver');
var webdriver = require('selenium-webdriver');

async function searchTextOnGoogle() {
  driver = new webdriver.Builder().forBrowser('chrome').build();
  driver.manage().window().maximize();

  driver.get('https://www.google.com');
  console.log('hello');

}

searchTextOnGoogle();