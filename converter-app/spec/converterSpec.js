// BRAK WYNIKU TESTU!!!
var converter = require('../converter/converter');
var helpers = require('../helpers/helpers');
var nock = require('nock');

describe('Currency Converter', function(){
    describe('GET echange rates', function(){

        beforeEach(function(){
            var ratesResponse = {
                "success":true,
                "timestamp":1713455943,
                "base":"EUR",
                "date":"2024-04-18",
                "rates":{
                  "AED":3.914949
            }
        };
        nock('http://data.fixer.io')
        .get('/latest')
        .reply(200, ratesResponse);
        });


        it('should return object', function(done){
            getLatestRates(function(result){
                expect(typeof result).toEqual('object');
                done();
            });
            
        });
        it('should return at least 1 rate', function(done){
            getLatestRates(function(result){
                var ratesCount = helpers.countKeys(result.rates);
                expect(ratesCount).toBeGreaterThan(0);
                done();
            });
            
        });
        
    });
});