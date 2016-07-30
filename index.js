'use strict';

module.change_code = 1;
var _              = require('lodash');
var Alexa          = require('alexa-app');
var app            = new Alexa.app('places-skill');
var PlacesHelper      = require('./places_api_helper');
var SightingHelper = require('./sightings_api_helper');

app.launch(function(req, res) {
  var prompt = 'Hi Dave.  I would love to talk places.  Which places can I tell you about?';
  var reprompt = 'Sorry, I am not sure if I heard anything.  Can you ask again?'
  res.say(prompt).reprompt(reprompt).shouldEndSession(false);
});


app.intent('getPlaceInfo', {
  'slots': {
    'NAME': 'LIST_OF_NAMES',  
    'CITY': 'AMAZON.US_CITIES',
  },
  'utterances': ['{|how} {|many} {Starbucks|Starbucks Coffee|Coffee|NAME} {|are } {|in} {-|CITY}']
  },
  function(req, res) {
    //get the slot
    var placeName = req.slot('NAME');
    var placeCity = req.slot('CITY');
    var reprompt = 'Ask me about places in a city!';

  if (_.isEmpty(placeName) || _.isEmpty(placeCity)) {
      var prompt = 'Ask me about places in a city';
      res.say(prompt).reprompt(reprompt).shouldEndSession(false);
      return true;
    } else {
          var placesHelper = new PlacesHelper();
          placesHelper.makeApiCall( placeName, placeCity 
          ).then(function(placeData){
            res.session('ghArray', placesHelper.formatPlaceData(placeData));
            res.say(placesHelper.speechFromPlaceData(placeData, placeName, placeCity)).shouldEndSession(false).send();
          }).catch(function(err) {
              console.log(err);
              var prompt = 'Sorry, something went wrong that time.';
              res.say(prompt).reprompt(reprompt).shouldEndSession(false).send();
      });

      return false;
    }
});
  
app.intent('getSightingsInfo', {

    'utterances': ['{|how many sightings are available at those places?}']
    },
    function(req, res) {
      var sightingsHelper = new SightingHelper();
      var get_and_respond = sightingsHelper.getSightings(res.session('ghArray')).then(function(sightingsData){
        res.session('counts', sightingsHelper.formatSightingsData(sightingsData))
        res.say(sightingsHelper.speechFromSightingsData(sightingsData)).shouldEndSession(false).send();
      }).catch(function(err){
        console.log(err);
        var prompt = "Something happened, I'm sorry I dont have those sightings figures right now. Please try again with new places."
        res.say(prompt).reprompt('Ask me about places in a city, bro').shouldEndSession(false).send();
      });
      return false;
});

app.intent('getFrequencyInfo', {
    'utterances': ['{|can you calculate the device frequency of those sightings for me?}']
    },
    function(req, res) {
      var sightingsHelper = new SightingHelper();
      var counts    = res.session('counts');
      var frequency = counts.total / counts.unique;
      console.log(frequency);
      res.say(sightingsHelper.speechFrequency(frequency)).send();

      return false;
});
  
  
module.exports = app;

// exports.handler = app.lambda();