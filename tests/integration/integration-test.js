'use strict';

var helpers = require('./helpers');

// do not expect angular to be on page
browser.ignoreSynchronization = true;

describe('Braintree Meteor Example', function () {

  it('loads a meteor application', function () {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Braintree + Meteor');
  });

  it('Processes a credit card transaction', function () {
    helpers.fillOutOrderDetails();
    helpers.fillOutPaymentForm();
    helpers.completeCheckout();

    expect($('h2').getText()).toEqual('Order Complete');
  });
});
