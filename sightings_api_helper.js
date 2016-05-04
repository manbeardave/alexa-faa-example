'use strict';

var _ = require('lodash');
var gh = require('GeoHex-node')
var rp = require('request-promise');
var ENDPOINT = '';

function SightingApiHelper() { }

  
SightingApiHelper.prototype.returnGeoHexes = function(placeData){
   
   var gh_string = "";
   for (var i = 0; i < placeData.body.hits.hits.length; i++) {
     var lat = placeData.body.hits.hits[i]['_source']['location']['lat'];
     var lon = placeData.body.hits.hits[i]['_source']['location']['lon'];
     gh_string = gh_string + gh.getZoneByLocation(lat, lon, 6).code + "|";
   }
   console.log(gh_string);
   return gh_string;
  

};


	 
 module.exports = SightingApiHelper;





 