'use strict';

var _ = require('lodash');
var rp = require('request-promise');
var ENDPOINT = 'https://0b40ebq662.execute-api.us-west-2.amazonaws.com/qa/places?';

function PlacesApiHelper() { }

PlacesApiHelper.prototype.makeApiCall= function(placeName, placeCity){

  var options = {
    method: 'GET',
    uri: ENDPOINT + 'name=' + placeName + '&city=' + placeCity,
    resolveWithFullResponse: true,
    json: true
  };
  return rp(options);
};
  
  PlacesApiHelper.prototype.formatPlacesData = function(placesData, placeName, placeCity){
    var speech = _.template('Right now I count ${total_number} of ${name} in ${city}')({
    total_number: placesData.body.hits.total,
    name: placeName,
    city: placeCity
  });
  
  return speech;
  

};


	 
module.exports = PlacesApiHelper;





