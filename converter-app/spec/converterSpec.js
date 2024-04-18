// BRAK WYNIKU TESTU!!!
var converter = require('../converter/converter');
var helpers = require('../helpers/helpers');

describe('Currency Converter', function(){
    describe('GET echange rates', function(){
        it('should return object', function(done){
            getLatestRates(function(result){
                expect(typeof result).toEqual('object');
                done();
            });
            
        });
        it('should return at least 1 rate', function(done){
            getLatestRates(function(result){
                var ratesCount = helpers.countKeys(result.rates);
                expect(ratesCount).toBeGreaterThan(1);
                done();
            });
            
        });
        
    });
});