'use strict';

/* Dependencies. */
var request = require('request');
var config = null;

/* Get all lists from your account. */
function getAllLists (callback) {
	var uri;

	if (!config.apiKey) {
		throw 'You must supply an API key!';
	}

	if (!callback) {
		throw 'You must supply a callback function!';
	}

	uri = config.endpoint + 'lists';
	uri = uri + '?apiKey=' + config.apiKey;

	request(uri, function (err, response, body) {
		if (err) {
			callback(err);
		}

		if (response.statusCode === 200) {
			callback(null, body);
		}
	});
};

/* Export the lists module. */
module.exports = function Lists (externalConfig) {
	config = externalConfig;

	return {
		getAllLists: getAllLists
	}
};