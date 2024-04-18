// Przygotowanie testu funkcji.
var converter = require('../converter/converter');

describe('Currency Converter', function(){
    describe('GET echange rates', function(){
        it('should return object', function(){
            var result = getLatestRates();
            expect(typeof result).toEqual('object');
        });
    });
});