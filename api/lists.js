'use strict';

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
function executeGetRequest (uri, callback) {
	uri = uri + '?apiKey=' + config.apiKey;

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

/* Get all lists from your account. */
function getAllLists (callback) {
	validateRequest(config, callback);

	var uri = config.endpoint + 'lists';
	executeGetRequest(uri, callback);
};

/* Get list details. */
function listDetails (id, callback) {
	validateRequest(config, callback);

	var uri = config.endpoint + 'lists/' + id;
	executeGetRequest(uri, callback);
}

/* Get all active subscribers from a given list. */
function activeSubscribers (id, callback) {
	validateRequest(config, callback);

	var uri = config.endpoint + 'lists/' + id + '/active/';
	executeGetRequest(uri, callback);
}

/* Export the lists module. */
module.exports = function Lists (externalConfig) {
	config = externalConfig;

	return {
		getAllLists: getAllLists,
		listDetails: listDetails,
		activeSubscribers: activeSubscribers
	};
};