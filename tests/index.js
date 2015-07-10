'use strict';

/* Very rudimentary tests of MailerLite API. */
var MailerLite = require('../index');

/* Get API key from environment variable for easier development. */
var apiKey = process.env.MAILERLITE_KEY;

/* Creates a new instance of MaillerLite wrapper passing my API key. */
var ML = new MailerLite(apiKey);

/* Get active subscribers from a given list. */
function test_activeSubscribers (id) {
	console.info('== activeSubscribers ==========');
	ML.Lists.activeSubscribers(id, function (err, data) {
		if (err) {
			throw err;
		}

		/* Print active subscribers. */
		console.log(data);
	});
}

/* Get details from a given list. */
function test_listDetails (id) {
	console.info('== listDetails ==========');
	ML.Lists.listDetails(id, function (err, data) {
		if (err) {
			throw err;
		}

		/* Print my list details. */
		console.log(data);

		/* Get active subscribers from this list. */
		test_activeSubscribers(id);
	});
}

/* Get all lists from my account. */
console.info('== getAllLists ==========');
ML.Lists.getAllLists(function (err, data) {
	if (err) {
		throw err;
	}

	/* Print all lists from my account. */
	console.log(data);

	/* Get details from my first list. */
	var id = data.Results[0].id;
	test_listDetails(id);
});