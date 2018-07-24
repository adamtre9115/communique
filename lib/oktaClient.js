const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: process.env.APP_DOMAIN,
  token: process.env.REGISTER_TOKEN
});

module.exports = client;