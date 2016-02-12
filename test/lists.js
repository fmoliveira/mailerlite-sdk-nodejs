'use strict';

var expect = require('expect.js');
var MailerLite = require('..');

describe('Lists', () => {
  it('should return more than one list', (done) => {
    var client = new MailerLite();
    client.Lists.getAll()
    .then((data) => {
      expect(data).not.to.be(undefined);
      expect(data).to.have.property('Results');
      expect(data.Results.length).to.be.above(1);
      done();
    });
  });
});
