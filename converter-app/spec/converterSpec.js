// Testujemy funckje asynchroniczne.
var converter = require('../converter/converter');

describe('Currency Converter', function(){
    describe('GET echange rates', function(){
        it('should return object', function(done){
            getLatestRates(function(result){
                expect(typeof result).toEqual('object');
                done();//wbudowany pakiet jasmine dla asynchroniczności.
            });
            
        });
    });
});