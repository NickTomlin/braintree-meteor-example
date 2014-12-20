Session.set('paymentFormStatus', null);

// note: it is highly recommended to _not_
// do things this way and instead use one of the many
// meteor libraries
// TODO: do this better
function serializeForm ($form) {
  var $inputs = $form.find('input, select, textarea');

  return _.reduce($inputs, function (data, input) {
    var name = input.name;

    if (name) {
      data[name] = input.value;
    }

    return data;
  }, {});
}

function initializeBraintree (clientToken) {

  braintree.setup(clientToken, 'dropin', {
    container: 'dropin',
    paymentMethodNonceReceived: function (event, nonce) {
      Session.set('paymentFormStatus', true);

      // we've received a payment nonce from braintree
      // we need to send it to the server, along with any relevant form data
      // to make a transaction
      var data = serializeForm($('#checkout'));
      data.nonce = nonce;

      Meteor.call('createTransaction', data, function (err, result) {
        Session.set('paymentFormStatus', null);
        Router.go('confirmation');
      });
    }
  });
}

Template.home.helpers({
  paymentFormStatusClass: function () {
    return Session.get('paymentFormStatus') ? 'payment-form__is-submitting' : '';
  }
});

Template.home.rendered = function () {
  Meteor.call('getClientToken', function (err, clientToken) {
    if (err) {
      console.log('There was an error', err);
      return;
    }

    initializeBraintree(clientToken);
  });
};
