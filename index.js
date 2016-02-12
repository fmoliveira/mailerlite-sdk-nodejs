'use strict';

/* Load RESTful client wrapper. */
var Client = require('./lib/client');
var Campaigns = require('./api/campaigns');
var Lists = require('./api/lists');
var Subscribers = require('./api/Subscribers');

/* Initialiser. */
function MailerLite(apiKey) {
  var client = new Client(apiKey);

  /* Register submodules. */
  this.Campaigns = new Campaigns(client);
  this.Lists = new Lists(client);
  this.Subscribers = new Subscribers(client);
};

/* Export the library. */
module.exports = MailerLite;
