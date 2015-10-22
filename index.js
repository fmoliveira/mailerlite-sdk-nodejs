'use strict';

var restify = require('restify');

var Config = require('./config'),
    Campaigns = require('./lib/campaigns'),
    Lists = require('./lib/lists'),
    Subscribers = require('./lib/subscribers');

module.exports = MailerLite;

function MailerLite (options) {
    var self = this;

    self.credentials = {
        apiKey: options.apiKey
    };

    self.client = restify.createJsonClient({
        url: Config.url
    });

    self.Campaigns = Campaigns(self.client);

    self.Lists = Lists(self.client);

    self.Subscribers = Subscribers(self.client);
}
