'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var APIHelper = require('../api_helper');
chai.config.includeStack = true;

describe('APIHelper', function() {
  this.timeout(15000);
  var placeName;
  var placeCity;
  var subject = new APIHelper();

  describe('#getPlaceInfo', function() {

    context('returns some stuff', function() {

      it('returns results from the API', function() {
        placeName = 'Starbucks Coffee';
        placeCity = 'Carlsbad';
        var value = subject.makeApiCall(placeName, placeCity).then(function(obj) {
          return obj['body'];
        });

        return expect(value).to.eventually.have.property('hits');
      });

    });

  });
    
});
