'use strict';

var request = require('request');

var Config = require('./config');
var Campaigns = require('./lib/campaigns');
var Lists = require('./lib/lists');
var Subscribers = require('./lib/subscribers');

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

  /* Initialise client. */
  let client = (verb, method, cb) => {
    let uri = `${Config.url}${method}?apiKey=${credentials.apiKey}`;
    return request(uri, cb);
  };

  /* Returns a promise to a given verb. */
  let promise = (verb, method) => {
    let promise = new Promise((resolve, reject) => {

      let cb = (err, res, body) => {
        let data = JSON.parse(body);

        if (err) {
          reject(err);
        } else if (data && data.error) {
          reject(data.error);
        } else {
          resolve(data);
        }
      };

      client(verb, method, cb);
    });
    return promise;
  };

  /* API promises. */
  self.get = (method) => promise('get', method);
}
