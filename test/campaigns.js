/* global describe, it */

'use strict'

var expect = require('expect.js')

var MailerLite = require('..')
var ML = new MailerLite()

describe('Campaigns', () => {
  it('should return an array', (done) => {
    ML.Campaigns.getAll()
      .then((data) => {
        expect(data).to.have.property('Page')
        expect(data.Page).to.be.equal(1)
        expect(data).to.have.property('Results')
        expect(data.Results).to.be.an('array')
        done()
      })
  })
})
