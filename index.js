'use strict';

module.change_code = 1;
var _              = require('lodash');
var Alexa          = require('alexa-app');
var app            = new Alexa.app('airportinfo');
var APIHelper  = require('./places_api_helper');

app.launch(function(req, res) {
  var prompt = 'Hi Dave.  I would love to talk places.  Which places can I tell you about?';
  var reprompt = 'Sorry, I am not sure if I heard anything.  Can you ask again?'
  res.say(prompt).reprompt(reprompt).shouldEndSession(false);
});

app.intent('getplaceinfo', {
  'slots': {
    'NAME': 'LIST_OF_NAMES',
    'CITY': 'AMAZON.US_CITIES',
  },
  'utterances': ['{|how} {|many} {-|NAME} {|are } {|in} {-|CITY}']
  },
  function(req, res) {
    //get the slot
    var placeName = req.slot('NAME');
    var placeCity = req.slot('CITY');
    var reprompt = 'Ask me about places in a city, fool!';
  if (_.isEmpty(placeName) || _.isEmpty(placeCity)) {
      var prompt = 'Ask me about places in a city, fool';
      res.say(prompt).reprompt(reprompt).shouldEndSession(false);
      return true;
    } else {
      var apiHelper = new APIHelper();
   apiHelper.makeApiCall( placeName, placeCity ).then(function(placeData) {
        console.log(placeData);
        res.say(apiHelper.formatPlaceData(placeData)).send();
      }).catch(function(err) {
        console.log(err.statusCode);
        var prompt = 'I didn\'t have data for an airport code of ' + placeName + "in " + placeCity;
        res.say(prompt).reprompt(reprompt).shouldEndSession(false).send();
      });

      return false;
    }
  }
  );

module.exports = app;