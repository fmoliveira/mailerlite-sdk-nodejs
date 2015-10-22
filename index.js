'use strict';

var restify = require('restify');

var Config = require('./config'),
    Campaigns = require('./lib/campaigns'),
    Lists = require('./lib/lists'),
    Subscribers = require('./lib/subscribers');

module.exports = MailerLite;

function MailerLite (apiKey) {
    let self = this;

    let credentials = {
        apiKey: apiKey || process.env.MAILERLITE_API_KEY
    };

    let api = new ApiClient(credentials);

    self.Campaigns = new Campaigns(api);

    self.Lists = new Lists(api);

    self.Subscribers = new Subscribers(api);
}

function ApiClient (credentials) {
    let self = this;

    /* Make an uri with the api key. */
    let makeUri = (method) => {
        let uri = method;
        uri + '?apiKey=' + credentials.apiKey;
        return uri;
    };

    /* Initialise restify client. */
    let client = restify.createJsonClient({
        url: Config.url
    });

    /* Returns a promise to a given verb. */
    let promise = (verb, method) => {
        let promise = new Promise((resolve, reject) => {
            client[verb](makeUri(method), (err, req, res, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        return promise;
    };

    /* API promises. */
    self.get = (method) => promise('get', method);
}
