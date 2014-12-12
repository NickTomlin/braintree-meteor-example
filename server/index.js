var gateway;

Meteor.startup(function () {
  var braintree = Meteor.npmRequire('braintree');
  gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    publicKey: process.env.BT_PUBLIC_KEY,
    privateKey: process.env.BT_PRIVATE_KEY,
    merchantId: process.env.BT_MERCHANT_ID
  });
});

Meteor.methods({
  getClientToken: function (clientId) {
    var generateToken = Meteor.wrapAsync(gateway.clientToken.generate, gateway.clientToken);
    var options = {};

    if (clientId) {
      options.clientId = clientId;
    }

    var response = generateToken(options);

    return response.clientToken;
  },
  createTransaction: function (data) {
    var transaction = Meteor.wrapAsync(gateway.transaction.sale, gateway.transaction);
    // this is very naive, do not do this in production!
    var amount = parseInt(data.quantity, 10) * 100;

    var response = transaction({
      amount: amount,
      paymentMethodNonce: data.nonce,
      customer: {
        firstName: data.firstName
      }
    });

    // ...
    // perform a server side action with response
    // ...

    return response;
  }
})
