'use strict';

var restify = require('restify');

var Campaigns = require('./lib/campaigns'),
	Lists = require('./lib/lists'),
	Subscribers = require('./lib/subscribers');

module.exports = MailerLite;

function MailerLite () {
	this.client = restify.createJsonClient({
		url: config.url
	});
};

MailerLite.prototype.Campaigns = Campaigns;

MailerLite.prototype.Lists = Lists;

MailerLite.prototype.Subscribers = Subscribers;
