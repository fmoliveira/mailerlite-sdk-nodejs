//'use strict';

/* Dependencies. */
var request = require('request');
var config = null;

/* Basic validation stuff. */
function validateRequest (callback) {
	if (!config.apiKey) {
		throw 'You must supply an API key!';
	}

	if (!callback) {
		throw 'You must supply a callback function!';
	}
}

/* Execute a basic GET request. */
function executeGetRequest (uri, callback, args) {
	uri = uri + '?apiKey=' + config.apiKey;

	if (args) {
		uri = uri + '&' + args;
	}

	request(uri, function (err, response, body) {
		if (err) {
			callback(err);
		}

		if (response.statusCode === 200) {
			var obj = JSON.parse(body);
			callback(null, obj);
		} else {
			callback(response);
		}
	});
}

/* Get all active subscribers from a given list. */
function getDetails (email, callback) {
	validateRequest(config, callback);

	var uri = config.endpoint + 'subscribers/';
	var args = 'email=' + email;
	executeGetRequest(uri, callback, args);
}

/* Export the lists module. */
module.exports = function Lists (externalConfig) {
	config = externalConfig;

	return {
		getDetails: getDetails
	};
};
