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
}
  
  PlacesApiHelper.prototype.formatPlacesData = function(placesData, placeName, placeCity ) {

    var weather = _.template('Right now I count ${total_number} of ${name} in ${city}')({
    total_number: placesData.hits.total,
    name: placeName,
    city: placesCity
  });
  
  return weather;
  
  
  // if (airportStatus.delay === 'true') {
//     var template = _.template('There is currently a delay for ${airport}. ' +
//       'The average delay time is ${delay_time}. ' +
//       'Delay is because of the following: ${delay_reason}. ${weather}');
//     return template({
//       airport: airportStatus.name,
//       delay_time: airportStatus.status.avgDelay,
//       delay_reason: airportStatus.status.reason,
//       weather: weather
//     });
//   } else {
//     //    no delay
//     return _.template('There is currently no delay at ${airport}. ${weather}')({
//       airport: airportStatus.name,
//       weather: weather
//     });
//   }

};


	 
module.exports = PlacesApiHelper;





