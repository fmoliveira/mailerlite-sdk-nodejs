'use strict';

var should = require('should'),
    MailerLite = require('..');

describe('Lists', () => {
    it('should return more than one list', (done) => {
        var client = new MailerLite();
        client.Lists.getAll()
            .then((data) => {
                console.log('Success!');
                console.log(data);
                data.should.be.ok();
                data.length.should.be.above(1);
                done();
            }, (err) => {
                console.error('Failed');
            });
    });
});
