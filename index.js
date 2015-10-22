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

    let makeUri = (method) => {
        let uri = method;
        uri + '?apiKey=' + credentials.apiKey;
        return uri;
    };

    let client = restify.createJsonClient({
        url: Config.url
    });

    self.get = (method, cb) => client.get(makeUri(method), cb);
}
