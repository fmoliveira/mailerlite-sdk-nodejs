/* Very rudimentary tests of MailerLite API. */
var MailerLite = require('../index');

/* Get API key from environment variable for easier development. */
var apiKey = process.env.MAILERLITE_KEY;

/* Creates a new instance of MaillerLite wrapper passing my API key. */
var ML = new MailerLite(apiKey);

/* Get all lists from my account. */
ML.Lists.getAllLists(function (err, data) {
	if (err) {
		throw err;
	}

	/* Print all lists from my account. */
	console.log(data);
});