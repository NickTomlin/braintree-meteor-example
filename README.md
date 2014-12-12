Braintree + Meteor
---

This is a small example app that shows one way of integration Braintree into your meteor application.

# Disclaimer

I am not a Meteor developer and as such this example may not follow _any_ of Meteor's best practices.  *Use it at your own peril*
If you notice something amiss, or want to see a new feature covered (e.g. storing customers) please implement it and submit a PR. All contributions are welcome.

# Initial setup

1. [Create a sandbox account](https://www.braintreepayments.com/get-started)
2. [Login](https://sandbox.braintreegateway.com/login) to the braintree sandbox
3. Retrieve your api keys (navigate to: My User > Api Keys)
4. Copy the `env.example` in this repository to `.env` (which will allow the server to use your credentials without storing them in version control)

# Start

```bash
$ meteor
```

# Issues?

For issues related to this repo, please submit an issue on github.
Any braintree related problems should be directed to [Braintree Support](https://support.braintreepayments.com/) or [#braintree](http://stackoverflow.com/questions/tagged/braintree) on StackOverflow.
