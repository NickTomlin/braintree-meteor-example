'use strict';

// do not expect angular to be on page
browser.ignoreSynchronization = true;

describe('Braintree Meteor Example', function () {
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

  // TODO, this could use a cleanup
  // and/or a smarter approach than
  // sleep
  function fillOutPaymentForm() {
    browser.driver.sleep(10000);
    browser.driver.switchTo().frame(0);
    browser.driver.sleep(10000);

    browser.driver.findElement(protractor.By.name('credit-card-number')).sendKeys(validCC);
    browser.driver.findElement(protractor.By.name('expiration')).sendKeys(validExp);
    browser.switchTo().defaultContent();
  }

  it('loads a meteor application', function () {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Braintree + Meteor');
  });

  it('Processes a credit card transaction', function () {

    for (var key in validInputValues) {
      var value = validInputValues[key];
      $('[name="' + key + '"]').sendKeys(value);
    }

    for (var key in validSelectValues) {
        var value = validSelectValues[key];
       element(by.cssContainingText('select', value)).click();
    }

    fillOutPaymentForm();

    $('button[type="submit"]').click();

    browser.driver.sleep(8000);
    expect($('h2').getText()).toEqual('Order Complete');
  });
});
