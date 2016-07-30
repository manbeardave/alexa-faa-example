'use strict';

var _ = require('lodash');
var gh = require('GeoHex-node')
var rp = require('request-promise');
var ENDPOINT = 'https://0b40ebq662.execute-api.us-west-2.amazonaws.com/qa/places?';

function SightingsApiHelper() { }

  
SightingsApiHelper.prototype.returnGeoHexes = function(placeData){
   
  var gh_array = [];
   for (var i = 0; i < placeData.body.hits.hits.length; i++) {
     var lat = placeData.body.hits.hits[i]['_source']['location']['lat'];
     var lon = placeData.body.hits.hits[i]['_source']['location']['lon'];
     gh_array.push(gh.getZoneByLocation(lat, lon, 6).code);
   }
   return gh_array;
};

SightingsApiHelper.prototype.formatSightingsData = function(sightingsData){
  var counts = {
    total: sightingsData.body.aggregations.available.value,
    unique: sightingsData.body.aggregations.uniques.value
  };
  console.log(counts);
  return counts;
};


SightingsApiHelper.prototype.getSightings = function(ghArray){

  var options = {
    method: 'GET',
    uri: ENDPOINT + 'gh=' + ghArray + '&sightings=1',
    resolveWithFullResponse: true,
    json: true
  };
  return rp(options);
};


SightingsApiHelper.prototype.speechFromSightingsData = function(sightingsData){
  var response = _.template('In the past year, with a half mile radius around those places, I count ${total} available impressions across ${unique} unique devices')({
    total: sightingsData.body.aggregations.available.value,
    unique: sightingsData.body.aggregations.uniques.value
  });
  return response
};

SightingsApiHelper.prototype.speechFrequency = function(frequency){
  var response = _.template('The is frequency or impression density ${frequency} impressions per device')({
    frequency: parseInt(frequency)
  });
  return response

};



	 

 module.exports = SightingsApiHelper;