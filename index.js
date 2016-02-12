'use strict';

/* Load RESTful client wrapper. */
var Client = require('./lib/client');

/* Initialiser. */
function MailerLite(apiKey) {
  self.ApiKey = apiKey || process.env.MAILERLITE_API_KEY;
};

/* Register submodules. */
MailerLite.prototype.Client = require('./lib/client');
MailerLite.prototype.Campaigns = require('./api/campaigns');
MailerLite.prototype.Lists = require('./api/lists');
MailerLite.prototype.Subscribers = require('./api/Subscribers');

/* Export the library. */
module.exports = MailerLite;
