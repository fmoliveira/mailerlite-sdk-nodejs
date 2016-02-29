/* global describe, it */

'use strict'

var expect = require('expect.js')

var MailerLite = require('..')
var ML = new MailerLite()

describe('Client', () => {
  it('should return an API error', (done) => {
    ML.Lists.getDetails()
      .then((data) => {
        expect().fail()
      }, (err) => {
        expect(err).to.have.property('code')
        expect(err).to.have.property('message')
      })
      .then(() => {
        done()
      })
  })
})
