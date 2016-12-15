'use strict';

var _ = require('lodash');
var gh = require('GeoHex-node')
var rp = require('request-promise');
var ENDPOINT = 'https://VC9aGfPUKPk5z6JbavAy:x@adm.vervemobile.com/api/v1/';

function AdmApiHelper() { }

AdmApiHelper.prototype.getFlightsForYP = function(){
  console.log('we made into request method');
  var options = {
    method: 'GET',
    uri: ENDPOINT + 'flights.json?account_id=524&per_page=1',
    resolveWithFullResponse: true,
    json: true
  };
  return rp(options);
};


AdmApiHelper.prototype.speechFromAdmData = function(flightData){
  console.log('--------------------------------');
  console.log(flightData.body.total_count);
  console.log('--------------------------------');
  var response = _.template('Since launching last year, Why Pee has created ${total} flights in our ADM system, bee otch')({
    total: flightData.body.total_count
  });
  return response
};



	 
module.exports = AdmApiHelper;