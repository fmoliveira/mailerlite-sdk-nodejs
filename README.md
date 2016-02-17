# MailerLite SDK for Node.js

[![NPM package][nodei-image]][nodei-url]
[![NPM package][npm-image]][npm-url]
[![Travis Build][travis-image]][travis-url]

Node.js wrapper for MailerLite API.

## Usage

Install with npm: `npm install --save mailerlite`.

Browse your lists:

```js
var MailerLite = require('mailerlite');
var ML = new MailerLite(apiKey);
ML.Lists.getAll()
  .then(function(data) {
    console.log(data);
  });
```

Browse the [documentation](http://fmoliveira.com.br/mailerlite-sdk-nodejs/) to read more.

## Compatibility

All methods will return promises. Support for callbacks is planned to be implemented soon.

## Documentation

* Module documentation: http://fmoliveira.com.br/mailerlite-sdk-nodejs/
* API documentation: https://docs.mailerlite.com/

## License
MIT.

[nodei-url]: https://nodei.co/npm/mailerlite/
[nodei-image]: https://nodei.co/npm/mailerlite.png?mini=true

[npm-url]: https://npmjs.com/package/mailerlite/
[npm-image]: https://img.shields.io/npm/dt/mailerlite.svg

[travis-url]: https://travis-ci.org/fmoliveira/mailerlite-sdk-nodejs
[travis-image]: https://api.travis-ci.org/fmoliveira/mailerlite-sdk-nodejs.svg
