'use strict';

/* Load Request module. */
var request = require('request');

/* Load static config. */
var config = require('../config');

/* Initialises an API client. */
function Client (apiKey) {
  this.ApiKey = apiKey || process.env.MAILERLITE_API_KEY;

  /* Generates the call URL. */
  var makeUrl = (method) => {
    return `${config.url}${method}?apiKey=${this.ApiKey}`;
  }

  /* Generic GET method. */
  Client.prototype.Get = (method, cb) => {
    let uri = makeUrl(method);
    
    let promise = new Promise((resolve, reject) => {
      /* Prepare callback for request. */
      let cb = (err, res, body) => {
        /* Caught a protocol error. */
        if (err) {
          reject(err);
        } else {
          let data = JSON.parse(body);

          /* Caught a data error. */
          if (data && data.error) {
            reject(data.error);
          } else {
            /* Resolved successfully. */
            resolve(data);
          }
        }
      };

      /* Send callback to request. */
      request(uri, cb);
    });

    /* Returns a promise. */
    return promise;
  };
};

/* Export the submodule. */
module.exports = Client;
