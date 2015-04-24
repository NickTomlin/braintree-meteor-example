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

  return browser.driver.wait(function () {
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
  exports.waitForElement($('[src$="inline-frame.html"]'));

  browser.driver.switchTo().frame(0);

  exports.waitForElement($('[name=credit-card-number]'));

  browser.driver.findElement(protractor.By.name('credit-card-number')).sendKeys(validCC);
  browser.driver.findElement(protractor.By.name('expiration')).sendKeys(validExp);
  browser.switchTo().defaultContent();
};

// shout out to Hans Poppe http://stackoverflow.com/a/28045726
exports.waitForElement = function (element, timeout) {
  timeout = timeout || 30000;
  browser.wait(function () {
    return element.isPresent();
  }, timeout);

  browser.wait(function () {
    return element.isDisplayed();
  }, timeout);
}
