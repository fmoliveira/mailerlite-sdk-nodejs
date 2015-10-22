'use strict';

var restify = require('restify');

var Config = require('./config'),
    Campaigns = require('./lib/campaigns'),
    Lists = require('./lib/lists'),
    Subscribers = require('./lib/subscribers');

module.exports = MailerLite;

function MailerLite (apiKey) {
    var self = this;

    self.credentials = {
        apiKey: apiKey || process.env.MAILERLITE_API_KEY
    };

    self.client = restify.createJsonClient({
        url: Config.url
    });

    self.Campaigns = new Campaigns(self.client);

    self.Lists = new Lists(self.client, self.credentials.apiKey);

    self.Subscribers = new Subscribers(self.client);
}
