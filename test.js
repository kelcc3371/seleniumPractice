var { Builder, By, Key, until} = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
// var edge = require('selenium-webdriver/edge');
var path = '/Users/kelsey.cox/Code/Selenium/Drivers/chromedriver';

//let service = new edge.ServiceBuilder("/Users/kelsey.cox/Code/Selenium/Drivers/msedgedriver.exe");
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

async function searchTextOnGoogle() {
  var driver = new Builder().forBrowser('chrome').build();

  driver.get('https://www.google.com');
  console.log('hello');

}

searchTextOnGoogle();