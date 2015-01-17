exports.config = {
  directConnect: true,

  baseUrl: 'http://localhost:3000',

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['./integration/integration-test.js'],

  jasmineNodeOpts: {
    showColors: true,
  }
};
