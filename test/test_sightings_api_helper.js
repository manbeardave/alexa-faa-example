'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var SightingsHelper = require('../sightings_api_helper');
chai.config.includeStack = true;

describe('SightingsHelper', function() {
  this.timeout(15000);
  var placeName;
  var placeCity;
  var subject = new SightingsHelper();

  describe('#getSightInfo', function() {

    context('returns a string of GH values', function() {

      it('from a ES body', function() {
                var sample_object = {
                                            "statusCode": 200,
                                            "body": {
                                              "took": 31,
                                              "timed_out": false,
                                              "_shards": {
                                                "total": 5,
                                                "successful": 5,
                                                "failed": 0
                                              },
                                              "hits": {
                                                "total": 9,
                                                "max_score": 9.719075,
                                                "hits": [
                                                  {
                                                    "_index": "places",
                                                    "_type": "place",
                                                    "_id": "890928183",
                                                    "_score": 9.719075,
                                                    "_source": {
                                                      "city": "Carlsbad",
                                                      "name": "Starbucks Coffee",
                                                      "phone_number": "760 438 4789",
                                                      "location": {
                                                        "lat": 33.13095,
                                                        "lon": -117.2596
                                                      },
                                                      "state": "California",
                                                      "place_source_id": 2,
                                                      "place_group_id": 2095,
                                                      "country": "United States",
                                                      "postal_code_suffix": "6602",
                                                      "id": 890928183,
                                                      "address_2": "Ste 100",
                                                      "postal_code": "92010",
                                                      "gh11": "PC227508664",
                                                      "address_1": "2708 Loker Ave W"
                                                    }
                                                  },
                                                  {
                                                    "_index": "places",
                                                    "_type": "place",
                                                    "_id": "891313620",
                                                    "_score": 9.7178135,
                                                    "_source": {
                                                      "city": "Carlsbad",
                                                      "name": "Starbucks Coffee",
                                                      "phone_number": "760 431 0157",
                                                      "location": {
                                                        "lat": 33.10342,
                                                        "lon": -117.268585
                                                      },
                                                      "state": "California",
                                                      "place_source_id": 2,
                                                      "place_group_id": 2095,
                                                      "country": "United States",
                                                      "postal_code_suffix": "4146",
                                                      "id": 891313620,
                                                      "address_2": "",
                                                      "postal_code": "92009",
                                                      "gh11": "PC227504618",
                                                      "address_1": "6951 El Camino Real"
                                                    }
                                                  },
                                                  {
                                                    "_index": "places",
                                                    "_type": "place",
                                                    "_id": "138123931",
                                                    "_score": 9.7178135,
                                                    "_source": {
                                                      "city": "Carlsbad",
                                                      "name": "Starbucks Coffee",
                                                      "phone_number": "760 804 1539",
                                                      "location": {
                                                        "lat": 33.100759,
                                                        "lon": -117.312547
                                                      },
                                                      "state": "California",
                                                      "place_source_id": 2,
                                                      "place_group_id": 2095,
                                                      "country": "United States",
                                                      "postal_code_suffix": "4657",
                                                      "id": 138123931,
                                                      "address_2": "Ste 102",
                                                      "postal_code": "92011",
                                                      "gh11": "PC227501856",
                                                      "address_1": "7130 Avenida Encinas"
                                                    }
                                                  },
                                                  {
                                                    "_index": "places",
                                                    "_type": "place",
                                                    "_id": "65889133",
                                                    "_score": 9.696937,
                                                    "_source": {
                                                      "city": "Carlsbad",
                                                      "name": "Starbucks Coffee",
                                                      "phone_number": "760 943 8004",
                                                      "location": {
                                                        "lat": 33.102806,
                                                        "lon": -117.266414
                                                      },
                                                      "state": "California",
                                                      "place_source_id": 2,
                                                      "place_group_id": 2095,
                                                      "country": "United States",
                                                      "postal_code_suffix": "7934",
                                                      "id": 65889133,
                                                      "address_2": "Ste 101",
                                                      "postal_code": "92009",
                                                      "gh11": "PC227504616",
                                                      "address_1": "7680 El Camino Real"
                                                    }
                                                  },
                                                  {
                                                    "_index": "places",
                                                    "_type": "place",
                                                    "_id": "891313621",
                                                    "_score": 9.696937,
                                                    "_source": {
                                                      "city": "Carlsbad",
                                                      "name": "Starbucks Coffee",
                                                      "phone_number": "760 729 2771",
                                                      "location": {
                                                        "lat": 33.179162,
                                                        "lon": -117.326578
                                                      },
                                                      "state": "California",
                                                      "place_source_id": 2,
                                                      "place_group_id": 2095,
                                                      "country": "United States",
                                                      "postal_code_suffix": "1201",
                                                      "id": 891313621,
                                                      "address_2": "",
                                                      "postal_code": "92008",
                                                      "gh11": "PC227542338",
                                                      "address_1": "2560 El Camino Real"
                                                    }
                                                  },
                                                  {
                                                    "_index": "places",
                                                    "_type": "place",
                                                    "_id": "890818312",
                                                    "_score": 9.696937,
                                                    "_source": {
                                                      "city": "Carlsbad",
                                                      "name": "Starbucks Coffee",
                                                      "phone_number": "760 804 9355",
                                                      "location": {
                                                        "lat": 33.126704,
                                                        "lon": -117.322924
                                                      },
                                                      "state": "California",
                                                      "place_source_id": 2,
                                                      "place_group_id": 2095,
                                                      "country": "United States",
                                                      "postal_code_suffix": "4466",
                                                      "id": 890818312,
                                                      "address_2": "Ste 124",
                                                      "postal_code": "92008",
                                                      "gh11": "PC227513367",
                                                      "address_1": "5620 Paseo Del Norte"
                                                    }
                                                  },
                                                  {
                                                    "_index": "places",
                                                    "_type": "place",
                                                    "_id": "111352444",
                                                    "_score": 9.595166,
                                                    "_source": {
                                                      "city": "Carlsbad",
                                                      "name": "Starbucks Coffee",
                                                      "phone_number": "760 434 0866",
                                                      "location": {
                                                        "lat": 33.159126,
                                                        "lon": -117.351433
                                                      },
                                                      "state": "California",
                                                      "place_source_id": 2,
                                                      "place_group_id": 2095,
                                                      "country": "United States",
                                                      "postal_code_suffix": "2903",
                                                      "id": 111352444,
                                                      "address_2": "",
                                                      "postal_code": "92008",
                                                      "gh11": "PC227517510",
                                                      "address_1": "2924 Carlsbad Blvd"
                                                    }
                                                  },
                                                  {
                                                    "_index": "places",
                                                    "_type": "place",
                                                    "_id": "891662918",
                                                    "_score": 9.5887985,
                                                    "_source": {
                                                      "city": "Carlsbad",
                                                      "name": "Starbucks Coffee",
                                                      "phone_number": "760 603 8471",
                                                      "location": {
                                                        "lat": 33.121372,
                                                        "lon": -117.314133
                                                      },
                                                      "state": "California",
                                                      "place_source_id": 2,
                                                      "place_group_id": 2095,
                                                      "country": "United States",
                                                      "postal_code_suffix": "1110",
                                                      "id": 891662918,
                                                      "address_2": "",
                                                      "postal_code": "92011",
                                                      "gh11": "PC227505564",
                                                      "address_1": "965 Palomar Airport Rd"
                                                    }
                                                  },
                                                  {
                                                    "_index": "places",
                                                    "_type": "place",
                                                    "_id": "698578765",
                                                    "_score": 6.529411,
                                                    "_source": {
                                                      "city": "Carlsbad",
                                                      "name": "It?S A Grind Coffee House",
                                                      "phone_number": "760 434 2216",
                                                      "location": {
                                                        "lat": 33.160793,
                                                        "lon": -117.35273
                                                      },
                                                      "state": "California",
                                                      "place_source_id": 2,
                                                      "place_group_id": 1198,
                                                      "country": "United States",
                                                      "postal_code_suffix": "2251",
                                                      "id": 698578765,
                                                      "address_2": "",
                                                      "postal_code": "92008",
                                                      "gh11": "PC227517523",
                                                      "address_1": "2744 Carlsbad Blvd"
                                                    }
                                                  }
                                                ]
                                              }
                                            },
                                            "headers": {
                                              "content-type": "application/json",
                                              "content-length": "4020",
                                              "connection": "close",
                                              "date": "Thu, 05 May 2016 02:26:44 GMT",
                                              "x-amzn-requestid": "cda043f8-1268-11e6-8f1e-9dab12537131",
                                              "x-cache": "Miss from cloudfront",
                                              "via": "1.1 4a495e8480f789db14c4afa001a38181.cloudfront.net (CloudFront)",
                                              "x-amz-cf-id": "qA9khHWNvNOkyKY8EYJ7IafyZBE8FXSWTmGRY-M9l20nTeecpaS1Vw=="
                                            },
                                            "request": {
                                              "uri": {
                                                "protocol": "https:",
                                                "slashes": true,
                                                "auth": null,
                                                "host": "0b40ebq662.execute-api.us-west-2.amazonaws.com",
                                                "port": 443,
                                                "hostname": "0b40ebq662.execute-api.us-west-2.amazonaws.com",
                                                "hash": null,
                                                "search": "?name=Starbucks%20Coffee&city=Carlsbad",
                                                "query": "name=Starbucks%20Coffee&city=Carlsbad",
                                                "pathname": "/qa/places",
                                                "path": "/qa/places?name=Starbucks%20Coffee&city=Carlsbad",
                                                "href": "https://0b40ebq662.execute-api.us-west-2.amazonaws.com/qa/places?name=Starbucks%20Coffee&city=Carlsbad"
                                              },
                                              "method": "GET",
                                              "headers": {
                                                "accept": "application/json"
                                              }
                                            }
                                          }
        console.log(sample_object);
        var value = subject.returnGeoHexes(sample_object);

        return expect(value).to.eq('PC227532|PC227504|PC227501|PC227503|PC227542|PC227505|PC227517|PC227505|PC227517|');
      });

    });

  });
    
});
