'use strict';

/* Mailer Lite configuration. */
var config = require('./config');

/* API wrappers. */
var Lists = require('./api/lists');
var Subscribers = require('./api/subscribers');

/* Set API key to be used in the next requests. */
function setApikey (key) {
	config.apiKey = key;
}

/* Export the MailerLite API modules. */
module.exports = function MailerLite (apiKey) {
	config.apiKey = apiKey;

	return {
		Lists: new Lists(config),
		Subscribers: new Subscribers(config)
	}
};