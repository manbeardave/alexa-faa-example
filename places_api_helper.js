'use strict';

var _ = require('lodash');
var rp = require('request-promise');
var gh = require('GeoHex-node')
var ENDPOINT = 'https://0b40ebq662.execute-api.us-west-2.amazonaws.com/qa/places?';

function PlacesApiHelper() { }

PlacesApiHelper.prototype.makeApiCall = function(placeName, placeCity){
  var options = {
    method: 'GET',
    uri: ENDPOINT + 'name=' + placeName + '&city=' + placeCity + '&places=1',
    resolveWithFullResponse: true,
    json: true
  };
  return rp(options);
};
  

PlacesApiHelper.prototype.formatPlaceData = function(placeData){
  var gh_array = [];
   for (var i = 0; i < placeData.body.hits.hits.length; i++) {
     var lat = placeData.body.hits.hits[i]['_source']['location']['lat'];
     var lon = placeData.body.hits.hits[i]['_source']['location']['lon'];
     gh_array.push(gh.getZoneByLocation(lat, lon, 6).code);
   }
   return gh_array;
};
  
  
PlacesApiHelper.prototype.speechFromPlaceData = function(placesData, placeName, placeCity){
    var speech = _.template('Right now I count ${total_number} of ${name} in ${city}')({
      total_number: placesData.body.hits.total,
      name: placeName,
      city: placeCity
      });

  
  return speech;
  

};


	 
module.exports = PlacesApiHelper;





