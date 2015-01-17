Braintree + Meteor
---

This is a small example app that shows one way of integration Braintree into your meteor application.

# Disclaimer

I am not a Meteor developer and as such this example may not follow _any_ of Meteor's best practices.  *Use it at your own peril*
If you notice something amiss, or want to see a new feature covered (e.g. storing customers) please implement it and submit a PR. All contributions are welcome.

# Initial setup

0. [Install Meteor](https://www.meteor.com/install)
1. Clone this repo `git clone git@github.com:NickTomlin/braintree-meteor-example.git`
2. [Create a sandbox account](https://www.braintreepayments.com/get-started)
3. [Login](https://sandbox.braintreegateway.com/login) to the braintree sandbox
4. Retrieve your api keys (navigate to: My User > Api Keys)
5. Insert the keys into `settings.json` and remove the `.example` extension

# Start

```bash
$ meteor --settings settings.json
```

# Integration Tests

```bash
npm i -g protractor
# meteor app should be running
protractor protractor.conf.js
```

At the moment the test require protractor to be installed globally, to avoid complications with Meteor's auto-loading behaviour. This is not ideal.

# Issues?

For issues related to this repo, please submit an issue on github.
Any braintree related problems should be directed to [Braintree Support](https://support.braintreepayments.com/) or [#braintree](http://stackoverflow.com/questions/tagged/braintree) on StackOverflow.
