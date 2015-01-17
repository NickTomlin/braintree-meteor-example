'use strict';

var validCC = '4111 1111 1111 1111';
var validExp = '0916';

var validInputValues = {
  firstName: 'Bob',
  lastName: 'Bibbins'
};

var validSelectValues = {
  tshirt: 'small',
  quantity: 2
};

exports.completeCheckout = function () {
  $('button[type="submit"]').click();

  browser.driver.wait(function () {
    return browser.driver.getCurrentUrl().then(function (url) {
      return url.indexOf('confirmation') > -1;
    });
  }, 10000);
};

exports.fillOutOrderDetails = function () {
  for (var key in validInputValues) {
    var value = validInputValues[key];
    $('[name="' + key + '"]').sendKeys(value);
  }

  for (var key in validSelectValues) {
    var value = validSelectValues[key];
    element(by.cssContainingText('select', value)).click();
  }
};

exports.fillOutPaymentForm = function () {
  browser.driver.wait(function () {
    return browser.driver.isElementPresent(protractor.By.css('[src$="inline-frame.html"]'));
  }, 15000);

  browser.driver.switchTo().frame(0);

  browser.driver.wait(function () {
    return browser.driver.isElementPresent(protractor.By.name('credit-card-number'));
  }, 10000);

  browser.driver.findElement(protractor.By.name('credit-card-number')).sendKeys(validCC);
  browser.driver.findElement(protractor.By.name('expiration')).sendKeys(validExp);
  browser.switchTo().defaultContent();
};
