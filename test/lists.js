'use strict';

var expect = require('expect.js'),
    MailerLite = require('..');

describe('Lists', () => {
    it('should return more than one list', (done) => {
        var client = new MailerLite();
        client.Lists.getAll()
            .then((data) => {
                console.log('Success!');
                console.log(data);
                expect(data).not.to.be(undefined);
                expect(data.length).to.be.above(1);
                done();
            }, (err) => {
                console.error('Failed');
            });
    });
});
